<?php
/**
 * Template for the Video Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$url    = $attributes['url'] ?? '';
$poster = $attributes['poster'] ?? '';

$block_class = $attributes['blockClass'] ?? 'video-element';
$js_class    = $attributes['blockJsClass'] ?? 'js-video-element';

$controls = $attributes['controls'] ?? 'controls';
$autoplay = $attributes['autoplay'] ?? '';
$loop     = $attributes['loop'] ?? '';
$muted    = $attributes['muted'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">
  <?php if ( ! empty( $poster ) ) { ?>
  <button class="<?php echo esc_attr( "{$block_class}__poster {$js_class}-poster" ); ?>" style="background-image: url(<?php echo \esc_attr( $poster ); ?>);"><span class="<?php echo esc_attr( "{$block_class}__play-icon" ); ?>"></span></button>
  <?php } ?>
  <div class="<?php echo esc_attr( "{$block_class}__video" ); ?>">
    <video class="<?php echo esc_attr( "{$block_class}__element {$js_class}" ); ?>" <?php echo \esc_attr( "{$autoplay} {$loop} {$muted} {$controls}" ); ?>>
      <source src="<?php echo esc_url( $url ); ?>" type="video/mp4">
    </video>
  </div>
</div>
