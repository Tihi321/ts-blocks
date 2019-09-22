<?php
/**
 * The Post Excerpt specific functionality.
 *
 * @since   1.0.0
 * @package TS_Blocks\Utils
 */

namespace TS_Blocks\Utils;

use Eightshift_Libs\Core\Service;

/**
 * Class Excerpt
 *
 * This class handles all excerpt options.
 *
 * @since 1.0.0
 */
class Excerpt implements Service {

  /**
   * Register all the hooks
   *
   * @return void
   *
   * @since 1.0.0
   */
  public function register() {
    add_filter( 'a1c_get_excerpt', [ $this, 'get_excerpt' ], 10, 1 );
  }

  /**
   * Checks if there is exceprt on post, if there is no post excerpt set, then it retrieves paragraphs from content, creates array from paragraphs content, implodes it to create string of whole content of paragraphs from page and returns limited characters as string.
   *
   * @param integer $limit  Number of characters to trim.
   * @return string         Trimmed excerpt.
   *
   * @since 2.0.0
   */
  public function get_excerpt( $limit = null ) {

    if ( empty( $limit ) ) {
      $limit = 140;
    }

    $excerpt = get_the_excerpt();

    if ( empty( $excerpt ) ) {
      $excerpt = $this->get_content();
    }

    // Remove shortcode.
    $output = preg_replace( ' (\[.*?\])', '', $excerpt );
    $output = strip_shortcodes( $output );

    // Remove html tags.
    $output = wp_strip_all_tags( $output );

    // Reduce string to limit.
    $output = substr( $output, 0, $limit );

    // Remove any whitespace character.
    $output = trim( preg_replace( '/\s+/', ' ', $output ) );

    // Check if strings are equal if not remove text until first space.
    if ( strcmp( $excerpt, $output ) !== 0 ) {
      $output = substr( $output, 0, strripos( $output, ' ' ) );
    }

    $output = $output . '...';
    return $output;
  }

  /**
   * Retrieves post content from all paragraph blocks.
   *
   * @return string         Trimmed excerpt.
   *
   * @since 2.0.0
   */
  private function get_content() {

    $block_content = parse_blocks( get_the_content() );

    // iterates over blocks from content and retrieves only paragraphs.
    $content_filtered = array_filter( $block_content, [ $this, 'get_paragraphs' ] );

    // iterates over paragraphs and gets only conent from block object.
    $content_array = array_map( [ $this, 'get_paragraph_content' ], $content_filtered );

    // Create a string from paragraps.
    return implode( '. ', $content_array );
  }

  /**
   * Filter blocks paragraph from content, it searches for blocks that have paragraphs in the blockname.
   *
   * @param array $content  Blocks content.
   * @return bool
   *
   * @since 2.0.0
   */
  private function get_paragraphs( $content ) {
    $name_array = explode( '/', $content['blockName'] )[1] ?? ''; // return any block name.
    return $name_array === 'paragraph';
  }

  /**
   * Get content from paragraphs.
   *
   * @param array $content  Blocks content.
   * @return string
   *
   * @since 2.0.0
   */
  private function get_paragraph_content( $content ) {
    return $content['attrs']['content'];
  }
}
