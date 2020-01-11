/**
 * Dependencies
 */
const mix = require( 'laravel-mix' );

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
