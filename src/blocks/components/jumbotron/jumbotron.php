<?php
/**
 * Template for the Jumbotron Component.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$block_class = $attributes['blockClass'] ?? 'jumbotron';

?>

<div class="<?php echo \esc_attr( $block_class ); ?>">
  <?php
  $this->render_block_view(
    '/components/heading/heading.php',
    [
      'blockClass' => $block_class,
      'content' => $attributes['headingContent'] ?? '',
      'styleColor' => $attributes['headingColor'] ?? '',
      'styleSize' => $attributes['headingSize'] ?? '',
      'styleWeight' => $attributes['headingWeight'] ?? '',
      'styleType' => $attributes['headingType'] ?? '',
      'styleFanily' => $attributes['headingFamily'] ?? '',
    ]
  );
  ?>
  <?php
  $this->render_block_view(
    '/components/paragraph/paragraph.php',
    [
      'blockClass' => $block_class,
      'content' => $attributes['paragraphContent'] ?? '',
      'styleColor' => $attributes['paragraphColor'] ?? '',
      'styleSize' => $attributes['paragraphSize'] ?? 'default',
      'styleAlign' => $attributes['paragraphAlign'] ?? '',
      'styleFanily' => $attributes['paragraphFamily'] ?? '',
    ]
  );
  ?>
  <?php
  $this->render_block_view(
    '/components/button/button.php',
    [
      'blockClass' => $block_class,
      'title' => $attributes['buttonTitle'] ?? '',
      'url' => $attributes['buttonUrl'] ?? '',
      'styleColor' => 'default',
    ]
  );
  ?>
</div>
