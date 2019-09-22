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
$color       = $attributes['color'] ?? '';

?>

<div class="<?php echo esc_attr( "{$block_class} {$block_class}--{$color}" ); ?>">
  <?php echo esc_html( $content ); ?>
</div>
