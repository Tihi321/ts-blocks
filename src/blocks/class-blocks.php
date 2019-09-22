<?php
/**
 * Blocks class used to define configurations for blocks.
 *
 * @since   1.0.0
 * @package TS_Blocks\Blocks
 */

namespace TS_Blocks\Blocks;

use Eightshift_Blocks\Blocks as Lib_Blocks;
use PHPHtmlParser\Dom;

/**
 * Blocks class.
 */
class Blocks extends Lib_Blocks {

  /**
   * Register all the hooks
   *
   * @since 1.0.0
   *
   * @return void
   */
  public function register() {
    parent::register();

    add_filter( 'allowed_block_types', [ $this, 'get_all_blocks_list' ], 9999 );
    add_filter( 'a1c_get_inner_blocks', [ $this, 'get_inner_blocks' ], 10, 2 );
  }

  /**
   * Get array of dom elements of specified class from dom string.
   *
   * @param string $inner_block_content Inner block string content class.
   * @param string $block_class Inner block class.
   *
   * @return object
   *
   * @since 1.0.0
   */
  public function get_inner_blocks( string $inner_block_content, $block_class ) {
    $dom = new Dom();
    $dom->load( $inner_block_content );
    $contents = $dom->find( $block_class );
    return $contents;
  }
}
