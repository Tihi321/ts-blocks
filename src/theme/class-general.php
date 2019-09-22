<?php
/**
 * The General specific functionality.
 *
 * @since   1.0.0
 * @package TS_Blocks\Theme
 */

namespace TS_Blocks\Theme;

use Eightshift_Libs\Core\Service;

/**
 * Class General
 */
class General implements Service {

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   */
  public function register() {
    add_action( 'after_setup_theme', [ $this, 'add_theme_support' ], 20 );
    add_filter( 'wp_kses_allowed_html', [ $this, 'set_custom_wpkses_post_tags' ], 10, 2 );

    /**
     * Optimizations
     *
     * This will remove some default functionality, but it mostly removes unnecessary
     * meta tags from the head section.
     */
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'wp_shortlink_wp_head' );
    remove_action( 'wp_head', 'rsd_link' );
    remove_action( 'wp_head', 'feed_links', 2 );
    remove_action( 'wp_head', 'feed_links_extra', 3 );
    remove_action( 'wp_head', 'rest_output_link_wp_head' );
  }

  /**
   * Enable theme support
   *
   * @since 1.0.0
   */
  public function add_theme_support() {
    add_theme_support( 'title-tag', 'html5' );
  }

  /**
   * Add tags to default wp_kses_post
   *
   * @param  array  $tags    Allowed tags array.
   * @param  string $context Context in which the filter is called.
   * @return array           Modified allowed tags array.
   *
   * @since 2.0.0
   */
  public function set_custom_wpkses_post_tags( $tags, $context ) {
    $appended_tags = [
      'svg' => [
        'xmlns'  => true,
        'xmlns:xlink'  => true,
        'height' => true,
        'width'  => true,
        'class'  => true,
      ],
      'defs' => true,
      'path' => [
        'd'         => true,
        'fill'      => true,
        'fill-rule' => true,
      ],
      'circle' => [
        'id' => true,
        'cx' => true,
        'cy' => true,
        'r'  => true,
        'opacity'  => true,
      ],
      'g' => [
        'transform' => true,
        'fill'      => true,
        'fill-rule' => true,
      ],
      'filter' => [
        'id' => true,
        'width'      => true,
        'height' => true,
        'x' => true,
        'y' => true,
        'filterUnits' => true,
      ],
      'feOffset' => [
        'dy' => true,
        'in'      => true,
        'result' => true,
      ],
      'feGaussianBlur' => [
        'stdDeviation' => true,
        'in'      => true,
        'result' => true,
      ],
      'feColorMatrix' => [
        'values' => true,
        'in'      => true,
      ],
      'use' => [
        'fill' => true,
        'filter'      => true,
        'xlink:href'      => true,
      ],
      'input' => array(
        'name'              => true,
        'value'             => true,
        'type'              => true,
        'placeholder'       => true,
        'class'             => true,
        'id'                => true,
        'readonly'          => true,
        'interest-rate-max' => true,
        'interest-rate-min' => true,
      ),
      'select' => array(
        'name'        => true,
        'id'          => true,
        'class'       => true,
        'data-filter' => true,
        'data-fund'   => true,
      ),
      'option' => array(
        'value'                  => true,
        'data-currency'          => true,
        'data-interest-rate-max' => true,
      ),
      'strong' => true,
      'source' => [
        'src'  => true,
        'type' => true,
      ],
    ];

    $tags = array_merge( $appended_tags, $tags );

    return $tags;
  }

}
