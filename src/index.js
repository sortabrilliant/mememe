/**
 * External Dependencies
 */
import { assign } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress Dependencies.
 */
import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal Dependencies
 */
import memeSettings from './attributes';
import MemeInspector from './inspector';

/**
 * Register Style(s).
 */
registerBlockStyle( 'core/image', {
	name: 'meme',
	label: 'Meme',
	isDefault: false,
} );

/**
 * Filters registered block settings, extending attributes with meme settings
 *p
 * @param {Object} settings Original block settings.
 * @param {string} name block name.
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings, name ) {
	if ( name !== 'core/image' ) {
		return settings;
	}
	// Use Lodash's assign to gracefully handle if attributes are undefined
	settings.attributes = assign( settings.attributes, memeSettings );
	return settings;
}

/**
 * Override the default edit UI to include a new block inspector control for
 * meme settings.
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( props.name !== 'core/image' ) {
			return 	<BlockEdit { ...props } />;
		}

		return (
			<Fragment>
				{ props.isSelected && props.attributes.className.includes( 'is-style-meme' ) && <MemeInspector { ...{ ...props } } /> }
				<BlockEdit { ...props } />
			</Fragment>
		);
	};
}, 'withInspectorControl' );

/**
 * Override the default block element to add meme wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function}                Wrapped component
 */
const withMeme = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( props.name !== 'core/image' ) {
			return 	<BlockListBlock { ...props } />;
		}

		const {
			memeTextPosition,
			memeTextSize,
		} = props.attributes;

		return (
			<BlockListBlock
				{ ...props }
				className={ classnames(
					{ [ `has-meme-position-${ memeTextPosition }` ]: memeTextPosition },
					{ [ `has-meme-text-${ memeTextSize }` ]: memeTextSize }
				) } />
		);
	};
}, 'withMeme' );

/**
 * Override props assigned to save component to inject meme attributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addMeme( extraProps, blockType, attributes ) {
	if ( blockType.name !== 'core/image' ) {
		return 	extraProps;
	}

	const {
		memeTextPosition,
		memeTextSize,
	} = attributes;

	const memeProps = assign(
		extraProps,
		{ className: classnames(
			extraProps.className,
			{ [ `has-meme-position-${ memeTextPosition }` ]: memeTextPosition },
			{ [ `has-meme-text-${ memeTextSize }` ]: memeTextSize }
		) }
	);

	return memeProps;
}

/**
 * Add hooks
 */
addFilter(
	'blocks.registerBlockType',
	'sb/mememe/attribute',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'sb/mememe/inspector',
	withInspectorControl
);

addFilter(
	'editor.BlockListBlock',
	'sb/meme/withMeme',
	withMeme
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'sb/mememe/addMeme',
	addMeme
);
