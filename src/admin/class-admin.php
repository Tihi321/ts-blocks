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

use TS_Blocks\Zoho\Token_Management;

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
    add_filter( 'get_user_option_admin_color', [ $this, 'set_admin_color_based_on_env' ], 50 );
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
    \wp_register_style( ACP_THEME_NAME . '-style', $this->manifest->get_assets_manifest_item( 'applicationAdmin.css' ), [], ACP_THEME_VERSION );
    \wp_enqueue_style( ACP_THEME_NAME . '-style' );

  }

  /**
   * Register the JavaScript for the admin area.
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function enqueue_scripts() {

    $main_script_handle = ACP_THEME_NAME . '-scripts';

    // Main JavaScript file.
    \wp_register_script( $main_script_handle, $this->manifest->get_assets_manifest_item( 'applicationAdmin.js' ), [], ACP_THEME_VERSION, true );
    \wp_enqueue_script( $main_script_handle );

      // Global variables for ajax and translations.
      wp_localize_script(
        $main_script_handle,
        'adminLocalization',
        array(
          'zohoTokenManagementNonce'       => wp_create_nonce( 'zoho_token_management_nonce' ),
          'zohoGetCredentialsAction'    => Token_Management::AJAX_ACTION_GET_CREDENTIALS,
          'zohoRemoveCredentialsAction' => Token_Management::AJAX_ACTION_REMOVE_CREDENTIALS,
        )
      );

  }

  /**
   * Method that changes admin colors based on environment variable. Must have ACP_ENV global variable set.
   *
   * @param string $color_scheme Color scheme string.
   * @return string              Modified color scheme.
   *
   * @since 1.0.0
   */
  public function set_admin_color_based_on_env( $color_scheme ) : string {
    if ( ! \defined( 'ACP_ENV' ) ) {
      return false;
    }

    switch ( ACP_ENV ) {
      case 'production':
            return 'sunrise';
      case 'staging':
            return 'blue';
      default:
            return 'fresh';
    }
  }

}
