/**
 * Dependencies
 */
const mix = require( 'laravel-mix' );

/**
 * Externals
 */
const externals = {
	lodash: 'lodash',
};

/**
 * Webpack Config
 * */
mix.webpackConfig( {
	externals,
} );

/**
 * Process CSS
 */
mix.sass( 'src/style.scss', 'build' );
mix.sass( 'src/editor.scss', 'build' );

/**
 * Production Task
 */
if ( mix.inProduction() ) {

}
