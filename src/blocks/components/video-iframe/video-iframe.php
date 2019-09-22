<?php
/**
 * Template for the Video Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$url = $attributes['url'] ?? '';

$component_class = $attributes['componentClass'] ?? 'video-iframe';
$id              = $attributes['id'] ?? '';
$options_attr    = $attributes['options'] ?? '';

$options = array_map(
  function( $option ) {
    $value = $option['value'];
    return "{$value}=1"; },
  $options_attr
);

$video_class  = "{$component_class}__video";
$iframe_class = "{$component_class}__iframe";


$options_string = implode( '&', $options );

$options_output = ( ! empty( $options_string ) ) ? "?{$options_string}" : '';


?>

<div class="<?php echo esc_attr( $component_class ); ?>">
  <div class="<?php echo esc_attr( $video_class ); ?>">
    <iframe class="<?php echo esc_attr( $iframe_class ); ?>" title="vimeo-player" src="<?php echo esc_url( "https://player.vimeo.com/video/$id$options_output" ); ?>" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen ></iframe>
  </div>
</div>
