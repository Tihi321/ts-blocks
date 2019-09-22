<?php
/**
 * Template for the Image Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$image = $attributes['image'] ?? '';

$image_url = $image['url'] ?? '';
$image_alt = $image['alt'] ?? '';

$block_class = $attributes['blockClass'];
$js_class    = $attributes['blockJsClass'];

?>

<div class="<?php echo esc_attr( "{$block_class} gallery-block" ); ?>">
  <div class="<?php echo esc_attr( "{$block_class}__rollover" ); ?>">
    <div class="<?php echo esc_attr( "{$block_class}__note" ); ?>">
      <span class="<?php echo esc_attr( "{$block_class}__note-text" ); ?>"><?php \esc_html_e( 'Open Gallery', 'ts-blocks' ); ?></span>
      <i class="<?php echo esc_attr( "{$block_class}__note-icon" ); ?>"></i>
    </div>
  </div>
  <div class="<?php echo esc_attr( "{$block_class}__image" ); ?>" style="background-image:url(<?php echo \esc_attr( $image_url ); ?>);">
  </div>
</div>
