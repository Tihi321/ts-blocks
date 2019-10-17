<?php
/**
 * Template for the Leader Image Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class = $attributes['blockClass'] ?? '';
$content     = $attributes['content'] ?? '';
$author      = $attributes['author'] ?? '';
$color       = $attributes['color'] ?? '';

?>

<div class="<?php echo esc_attr( "{$block_class} {$block_class}--{$color}" ); ?>">
  <span class="<?php echo esc_attr( "{$block_class}__content" ); ?>"><?php echo esc_html( $content ); ?></span>
  <?php if ( ! empty( $author ) ) { ?>
  <span class="<?php echo esc_attr( "{$block_class}_author" ); ?>"><?php echo esc_html( $author ); ?></span>
  <?php } ?>
</div>
