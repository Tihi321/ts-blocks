<?php
/**
 * Template for the Leader Image Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$this->render_block_view(
  '/components/code/code.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'blockJsClass' => $attributes['blockJsClass'] ?? '',
    'content' => $attributes['content'] ?? '',
    'type' => $attributes['type'] ?? '',
  ]
);
