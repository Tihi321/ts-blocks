<?php
/**
 * Template for the Jobs Search Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class = $attributes['blockClass'] ?? 'jobs-search';
$js_class    = $attributes['blockJsClass'] ?? 'js-jobs-search';

$options = $attributes['options'] ?? '';

?>

<div class="<?php echo \esc_attr( $js_class ); ?>" action="#" data-options="<?php echo \esc_attr( implode( ';', $options ) ); ?>" data-class-name="<?php echo \esc_attr( $block_class ); ?>">

</div>
