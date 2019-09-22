<?php
/**
 * Template for the Jumbotron Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class = $attributes['blockClass'] ?? 'testimonial';

$is_video    = $attributes['isVideo'] ?? '';
$js_class    = $attributes['jsClass'] ?? 'js-testimonial-play';
$content     = $attributes['content'] ?? '';
$title       = $attributes['titleContent'] ?? '';
$button_text = $attributes['buttonText'] ?? __( 'Play video', 'a1-careers-page' );

$button_class = $attributes['buttonClassName'] ?? "{$block_class}__play-btn";
?>

<div class="<?php echo \esc_attr( $block_class ); ?>">
    <div class="<?php echo \esc_attr( "{$block_class}__content" ); ?>">
      <?php echo \esc_html( $content ); ?>
      <?php if ( $is_video ) { ?>
      <button class="<?php echo \esc_attr( "{$button_class} {$js_class}" ); ?>"><?php echo \esc_html( $button_text ); ?><span lass="<?php echo \esc_attr( "{$block_class}__icon" ); ?>"></span></button>
      <?php } ?>
    </div>
    <div class="<?php echo \esc_attr( "{$block_class}__name" ); ?>"><?php echo \esc_html( $title ); ?></div>
</div>
