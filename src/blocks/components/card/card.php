<?php
/**
 * Template for the Card Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$component_class = $attributes['blockClass'] ?? 'card';

$featured_image = $attributes['featuredImage'] ?? '';
$link           = $attributes['link'] ?? '';
$excerpt        = $attributes['excerpt'] ?? '';
$title          = $attributes['title'] ?? '';
$button_text    = ( ! empty( $attributes['buttonText'] ) ) ? $attributes['buttonText'] : __( 'Read more', 'a1-careers-page' );

?>

<a class="<?php echo \esc_attr( $component_class ); ?>" href="<?php echo esc_url( $link ); ?>">
  <div class="<?php echo \esc_attr( "{$component_class}__image" ); ?>" style="background-image: url(<?php echo \esc_attr( $featured_image ); ?>);"></div>
  <div class="<?php echo \esc_attr( "{$component_class}__content" ); ?>">
    <h2 class="<?php echo \esc_attr( "{$component_class}__title" ); ?>">
      <?php echo esc_html( $title ); ?>
    </h2>
    <div class="<?php echo \esc_attr( "{$component_class}__excerpt" ); ?>">
      <?php echo esc_html( $excerpt ); ?>
    </div>
    <button class="<?php echo \esc_attr( "icon--arrow-fat {$component_class}__read-more" ); ?>">
      <?php echo esc_html( $button_text ); ?>
    </button>
  </div>
</a>
