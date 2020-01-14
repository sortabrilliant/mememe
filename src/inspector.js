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
			label: 'Large',
			value: 'lg',
		},
		{
			label: 'Extra Large',
			value: 'xl',
		},
		{
			label: '2 Extra Large',
			value: '2xl',
		},
		{
			label: '3 Extra Large',
			value: '3xl',
		},
		{
			label: '4 Extra Large',
			value: '4xl',
		},
		{
			label: '5 Extra Large',
			value: '5xl',
		},
		{
			label: '6 Extra Large',
			value: '6xl',
		},
	];

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

				<SelectControl
					options={ fontSizes }
					label="Text Size"
					value={ memeTextSize }
					onChange={ ( newSize ) => setAttributes( { memeTextSize: newSize } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default MemeInspector;
