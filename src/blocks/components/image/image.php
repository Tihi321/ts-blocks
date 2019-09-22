<?php
/**
 * Template for the Image Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$size = $attributes['size'] ?? 'full';

$component_class = 'image';
$block_class     = $attributes['blockClass'] ?? '';

$image_class = "
  {$component_class}
  {$block_class}__img
";

$media_url = \wp_get_attachment_image_src(
  $attributes['id'],
  $size
);

?>

<img class="<?php echo esc_attr( $image_class ); ?>" src="<?php echo esc_url( $media_url[0] ); ?>" />
