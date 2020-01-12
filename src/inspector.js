/**
 * WordPress Dependencies.
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
} from '@wordpress/components';

import {
	InspectorControls,
	FontSizePicker,
	withFontSizes,
} from '@wordpress/block-editor';

import { compose } from '@wordpress/compose';

/**
 * Inspector Component.
 *
 * @param {Object} props component props
 * @return {Object} Component
 */
const Inspector = ( props ) => {
	const { attributes, setAttributes, fontSize, setFontSize } = props;
	const { memeTextPosition } = attributes;

	return (
		<InspectorControls>
			<PanelBody title="Meme Settings" initialOpen={ true }>
				<BaseControl id="meme-position" label="Text Position">
					<ButtonGroup
						aria-label="Text Position"
						className="block-meme__position">
						<Button
							isLarge
							isPrimary={ 'top' === memeTextPosition }
							aria-pressed={ 'top' === memeTextPosition }
							onClick={ () => setAttributes( { memeTextPosition: 'top' } )	}>
							Top
						</Button>
						<Button
							isLarge
							isPrimary={ 'bottom' === memeTextPosition }
							aria-pressed={ 'bottom' === memeTextPosition }
							onClick={ () => setAttributes( { memeTextPosition: 'bottom' } )	}>
							Bottom
						</Button>
					</ButtonGroup>
				</BaseControl>

				<FontSizePicker
					value={ fontSize.size }
					onChange={ setFontSize }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

const MemeInspector = compose( [
	withFontSizes( 'fontSize' ),
] )( Inspector );

export default MemeInspector;
