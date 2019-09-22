<?php
/**
 * Template for the Testimonial blok.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class         = $attributes['blockClass'] ?? '';
$js_class            = $attributes['blockJsClass'] ?? '';
$inner_block_content = $attributes['innerBlockContent'] ?? '';
$inner_block_class   = $attributes['innerBlockClass'] ?? '';

$inner_blocks = apply_filters( 'a1c_get_inner_blocks', $inner_block_content, $inner_block_class );

?>
<div class="<?php echo esc_attr( "{$block_class} {$js_class} swiper-container" ); ?>">
  <div class="<?php echo esc_attr( 'swiper-wrapper' ); ?>">
  <?php
  if ( ! empty( $inner_blocks ) ) {
    foreach ( $inner_blocks as $index => $element ) {
      ?>
      <div class="<?php echo \esc_attr( "{$block_class}__item swiper-slide" ); ?>">
        <?php echo wp_kses_post( $element ); ?>
      </div>
      <?php
    }
  }
  ?>
  </div>
  <div class="<?php echo esc_attr( "icon--arrow-fat {$block_class}__navigation {$block_class}__navigation--prev {$js_class}-navigation--prev" ); ?>"></div>
  <div class="<?php echo esc_attr( "icon--arrow-fat {$block_class}__navigation {$block_class}__navigation--next {$js_class}-navigation--next" ); ?>"></div>
</div>
