<?php
/**
 * Meme Generator Block
 *
 * Class for MemeME Block
 *
 * @author      sortabrilliant
 * @package     SB
 * @category    Classes
 */

/**
 * Meme Generator.
 *
 * Block For Meme.
 *
 * @class    SB_MemeMe
 * @since    1.0.0
 * @category Class
 * @author   sorta brilliant
 */
class SB_MemeMe {
	/**
	 * Instance.
	 *
	 * @since
	 * @access private
	 * @var SB_MemeMe
	 */
	private static $instance;

	/**
	 * Singleton pattern.
	 *
	 * @since  1.0.0
	 * @access private
	 */
	private function __construct() {
		$this->init_hooks();
	}
	/**
	 * Get instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return SB_MemeMe
	 */
	public static function get_instance() {
		if ( null === static::$instance ) {
			self::$instance = new static();
		}
		return self::$instance;
	}

	/**
	 * Hook into actions and filters.
	 *
	 * @since  1.0.0
	 */
	private function init_hooks() {
		add_action( 'init', [ $this, 'register_block' ] );
	}

	/**
	 * Register block
	 *
	 * @since  1.0.0
	 * @return void
	 */
	public function register_block() {
		// Assets.
		$asset_file = include MEMEME_PLUGIN_PATH . '/build/index.asset.php';

		// Scripts.
		wp_register_script(
			'mememe-editor',
			MEMEME_PLUGIN_URL . '/build/index.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		// Styles.
		wp_register_style(
			'mememe',
			MEMEME_PLUGIN_URL . '/build/style.css',
			[],
			$asset_file['version']
		);

		wp_register_style(
			'mememe-editor',
			MEMEME_PLUGIN_URL . '/build/editor.css',
			[],
			$asset_file['version']
		);

		// Enqueue Assets.
		if ( is_admin() ) {
			wp_enqueue_script( 'mememe-editor' );
			wp_enqueue_style( 'mememe-editor' );
		}

		wp_enqueue_style( 'mememe' );
	}
}
