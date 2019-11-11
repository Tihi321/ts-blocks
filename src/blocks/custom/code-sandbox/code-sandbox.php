<?php
/**
 * Template for the Embed Code Sandbox Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$title       = $title['iframe'] ?? '';
$style       = $attributes['style'] ?? '';
$src         = $attributes['src'] ?? '';
$allow       = $attributes['allow'] ?? '';
$sandbox     = $attributes['sandbox'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <iframe
    title="<?php echo esc_attr( $title ); ?>"
    class="<?php echo esc_attr( "{$block_class}__iframe" ); ?>"
    style="<?php echo esc_attr( $style ); ?>"
    src="<?php echo esc_url( $src ); ?>"
    allow="<?php echo esc_attr( $allow ); ?>"
    sandbox="<?php echo esc_attr( $sandbox ); ?>"
  >
  </iframe>
</div>

