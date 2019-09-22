<?php
/**
 * Template for the Gallery block.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class       = $attributes['blockClass'] ?? '';
$js_class          = $attributes['blockJsClass'] ?? '';
$inner_block_class = '.gallery-block';

$inner_blocks = apply_filters( 'a1c_get_inner_blocks', $inner_block_content, $inner_block_class );

?>
<div class="<?php echo esc_attr( "{$block_class}" ); ?>">
<?php
if ( ! empty( $inner_blocks ) ) {
  foreach ( $inner_blocks as $index => $element ) {
    if ( $index > 5 ) {
      break;
    }
    ?>
    <div class="<?php echo esc_attr( "{$block_class}__item {$js_class}-item" ); ?>">
      <?php echo wp_kses_post( $element ); ?>
    </div>
      <?php
  }
}
?>
</div>

<div class="<?php echo \esc_attr( "{$block_class}__modal {$js_class}-modal" ); ?>">
  <?php
  $this->render_block_view(
    '/components/slider/slider.php',
    [
      'blockClass' => "{$block_class}-slider",
      'blockJsClass' => $js_class,
      'innerBlockClass' => $inner_block_class,
      'innerBlockContent' => $inner_block_content,
    ]
  );
  ?>
</div>
