/**
 * WordPress Dependencies.
 */
import {
	BaseControl,
	Button,
	ButtonGroup,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

import {
	InspectorControls,
} from '@wordpress/block-editor';

/**
 * Inspector Component.
 *
 * @param {Object} props component props
 * @return {Object} Component
 */
const MemeInspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const { memeTextPosition, memeTextSize } = attributes;

	const fontSizes = [
		{
			label: 'Small',
			value: 's',
		},
		{
			label: 'Medium',
			value: 'm',
		},
		{
			label: 'Large',
			value: 'lg',
		},
		{
			label: 'Extra Large',
			value: 'xl',
		},
	];

	return (
		<InspectorControls>
			<PanelBody title="Meme Settings" initialOpen={ true }>
				<BaseControl id="meme-position" label="Caption Position">
					<ButtonGroup
						aria-label="Caption Position"
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

				<SelectControl
					options={ fontSizes }
					label="Caption Size"
					value={ memeTextSize }
					onChange={ ( newSize ) => setAttributes( { memeTextSize: newSize } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default MemeInspector;
