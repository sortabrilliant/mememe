/**
 * WordPress Dependencies.
 */
import { registerBlockStyle } from '@wordpress/blocks';

/**
 * Register Styles.
 */
registerBlockStyle( 'core/image', [
	{
		name: 'meme',
		label: 'Meme',
	},
] );
