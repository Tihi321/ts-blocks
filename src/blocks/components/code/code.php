<?php
/**
 * Template for the Code Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class    = $attributes['blockClass'] ?? 'code-block';
$js_block_class = $attributes['blockJsClass'] ?? 'js-code-block';
$content        = $attributes['content'] ?? '';
$type           = $attributes['type'] ?? 'javascript';

?>

<pre class="<?php echo esc_attr( "{$block_class} {$js_block_class} {$type}" ); ?>">
  <?php echo esc_html( $content ); ?>
</pre>
