<?php
/**
 * The Admin specific functionality.
 *
 * @since   1.0.0
 * @package TS_Blocks\Admin
 */

namespace TS_Blocks\Admin;

use Eightshift_Libs\Core\Service;
use Eightshift_Libs\Manifest\Manifest_Data;

/**
 * Class Admin
 *
 * This class handles enqueue scripts and styles and some
 * admin facing functionality.
 *
 * @since 1.0.0
 */
class Admin implements Service {

  /**
   * Instance variable of manifest data.
   *
   * @var object
   *
   * @since 1.0.0
   */
  protected $manifest;

  /**
   * Create a new admin instance that injects manifest data for use in assets registration.
   *
   * @param Manifest_Data $manifest Inject manifest which holds data about assets from manifest.json.
   *
   * @since 1.0.0
   */
  public function __construct( Manifest_Data $manifest ) {
      $this->manifest = $manifest;
  }

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );
    add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
  }

  /**
   * Register the Stylesheets for the admin area.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function enqueue_styles() {

    // Main style file.
    \wp_register_style( TB_PLUGIN_NAME . '-style', $this->manifest->get_assets_manifest_item( 'applicationAdmin.css' ), [], TB_PLUGIN_VERSION );
    \wp_enqueue_style( TB_PLUGIN_NAME . '-style' );

  }

  /**
   * Register the JavaScript for the admin area.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function enqueue_scripts() {

    $main_script_handle = TB_PLUGIN_NAME . '-scripts';

    // Main JavaScript file.
    \wp_register_script( $main_script_handle, $this->manifest->get_assets_manifest_item( 'applicationAdmin.js' ), [], TB_PLUGIN_VERSION, true );
    \wp_enqueue_script( $main_script_handle );

  }

}
