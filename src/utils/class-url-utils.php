<?php
/**
 * Url Utility class.
 *
 * @since   1.0.0
 * @package TS_Blocks\Admin
 */

namespace TS_Blocks\Utils;

use Eightshift_Libs\Core\Service;

/**
 * Class Url_Utils
 *
 * This class handles srtings.
 *
 * @since 1.0.0
 */
class Url_Utils implements Service {

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_filter( 'tb_get_base_url', [ $this, 'get_base' ] );
  }

  /**
   * Gets this plugin file.
   *
   * @param string $type Type of the const to return.
   * @since  1.0.0
   *
   * @return string
   */
  public function get_base( $type ) : string {
    switch ( $type ) {
      case 'name':
            return $this->get_basename();
      case 'path':
            return $this->get_base_path();
      case 'url':
            return $this->get_base_url();
      default:
            return '';
    }
  }

  /**
   * Gets this plugin file.
   *
   * @since  1.0.0
   *
   * @return string
   */
  private function get_basename() : string {
    return plugin_basename( dirname( __FILE__, 2 ) ) . Config::PLUGIN_NAME . '.php';
  }

  /**
   * Gets this plugin base path.
   *
   * @since  1.0.0
   *
   * @return string
   */
  private function get_base_path() : string {
    return plugin_dir_path( dirname( __FILE__, 2 ) );
  }

  /**
   * Gets this plugin base url.
   *
   * @since  1.0.0
   *
   * @return string
   */
  private function get_base_url() : string {
    return plugin_dir_url( dirname( __FILE__, 2 ) );
  }
}
