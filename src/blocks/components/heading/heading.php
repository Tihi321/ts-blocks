<?php
/**
 * Template for the Heading Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$content = $attributes['content'] ?? '';
$level   = isset( $attributes['level'] ) ? "h{$attributes['level']}" : 'h2';

$component_class = 'heading';
$block_class     = $attributes['blockClass'] ?? '';
$style_align     = isset( $attributes['styleAlign'] ) ? "{$component_class}__align--{$attributes['styleAlign']}" : '';
$style_color     = isset( $attributes['styleColor'] ) ? "{$component_class}__color--{$attributes['styleColor']}" : '';
$style_size      = isset( $attributes['styleSize'] ) ? "{$component_class}__size--{$attributes['styleSize']}" : '';
$style_weight    = isset( $attributes['styleWeight'] ) ? "{$component_class}__weight--{$attributes['styleWeight']}" : '';
$style_type      = isset( $attributes['styleType'] ) ? "{$component_class}__type--{$attributes['styleType']}" : '';
$style_family    = isset( $attributes['styleFamily'] ) ? "{$component_class}__family--{$attributes['styleFamily']}" : '';

$heading_class = "
  {$component_class}
  {$style_align}
  {$style_color}
  {$style_size}
  {$style_family}
  {$style_weight}
  {$block_class}__heading
";

?>

<div class="<?php echo esc_attr( $style_type ); ?>">
<<?php echo esc_attr( $level ); ?> class="<?php echo esc_attr( $heading_class ); ?>">
  <?php echo wp_kses_post( $content ); ?>
</<?php echo esc_attr( $level ); ?>>
</div>
