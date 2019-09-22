<?php
/**
 * The Manifest data specific functionality.
 * Used in admin or theme side.
 *
 * @since   1.0.0
 * @package TS_Blocks\Manifest
 */

namespace TS_Blocks\Manifest;

use Eightshift_Libs\Manifest\Manifest as LibManifest;
use Eightshift_Libs\Core\Service;

/**
 * Class Mainfest
 *
 * @since 1.0.0
 */
class Manifest extends LibManifest implements Service {

  /**
   * Global variable name constant.
   *
   * @var string
   *
   * @since 0.6.0
   */
  const GLOBAL_VARIABLE_NAME = 'TB_ASSETS_MANIFEST';

  /**
   * Manifest item filter name constant.
   *
   * @var string
   *
   * @since 0.9.0
   */
  const MANIFEST_ITEM_FILTER_NAME = 'tb_manifest_item';

  /**
   * Get Assets Manifest global variable name.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_manifest_item_filter_name() : string {
    return 'tb_manifest_item';
  }

  /**
   * Get Assets Manifest global variable name.
   *
   * @return string
   *
   * @since 1.0.0
   */
  protected function get_global_variable_name() : string {
    return 'TB_ASSETS_MANIFEST';
  }

  /**
   * Get manifest.json url location.
   * If you are using a plugin or a different manifest location provide location with this method.
   *
   * @return string
   *
   * @since 0.6.0 Changed from abstract method to prefilled.
   * @since 0.1.0
   */
  protected function get_manifest_url() : string {
    return apply_filters( 'tb_get_base_url', 'path' ) . '/public/manifest.json';
  }
}
