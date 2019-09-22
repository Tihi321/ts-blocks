<?php
/**
 * Template for the Vimeo Video Block view.
 *
 * @since 1.0.0
 * @package TS_Blocks\Blocks.
 */

namespace TS_Blocks\Blocks;

$this->render_block_view(
  '/components/video-iframe/video-iframe.php',
  [
    'id' => $attributes['vimeoId'] ?? '',
    'options' => $attributes['vimeoOptions'] ?? '',
  ]
);
