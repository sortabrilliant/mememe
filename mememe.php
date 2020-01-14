<?php
/**
 * Plugin Name: Meme Me
 * Plugin URI: https://sortabrilliant.com/mememe/
 * Description: Convert your regular images into meme.
 * Author: sorta brilliant
 * Author URI: https://sortabrilliant.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package SB
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Setup Constants.
 */
// Plugin version.
if ( ! defined( 'MEMEME_VERSION' ) ) {
	define( 'MEMEME_VERSION', '2.0.1' );
}
// Plugin Root File.
if ( ! defined( 'MEMEME_PLUGIN_FILE' ) ) {
	define( 'MEMEME_PLUGIN_FILE', __FILE__ );
}
// Plugin Folder Path.
if ( ! defined( 'MEMEME_PLUGIN_PATH' ) ) {
	define( 'MEMEME_PLUGIN_PATH', plugin_dir_path( MEMEME_PLUGIN_FILE ) );
}
// Plugin Folder URL.
if ( ! defined( 'MEMEME_PLUGIN_URL' ) ) {
	define( 'MEMEME_PLUGIN_URL', plugin_dir_url( MEMEME_PLUGIN_FILE ) );
}
// Plugin Basename aka: "mememe/mememe.php".
if ( ! defined( 'MEMEME_PLUGIN_BASENAME' ) ) {
	define( 'MEMEME_PLUGIN_BASENAME', plugin_basename( MEMEME_PLUGIN_FILE ) );
}

// Autoloader.
require_once 'vendor/autoload.php';

// Bootstrap MemeMe.
use SortaBrilliant\MemeMe\MemeMe;

/**
 * Main instance of MemeMe.
 *
 * Returns the main instance of Wpccp to prevent the need to use globals.
 *
 * @since 2.0.0
 * @return MemeMe
 */
function meme_me() {
	return SB_MemeMe::get_instance();
}
meme_me();
