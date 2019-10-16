<script>
  import autosize from 'autosize';
  import { onMount } from 'svelte';
  import Grid from './grid.svelte';

  let vbx = '5';
  let vby = '5';
  let opacity = '1';
  let maxWidth = '200px';
  let height = 'auto';
  let textarea;
  let content = '... Svg code goes here';

  onMount(() => {
    autosize(textarea);
	});

</script>

<div class="block-svg-grid__inner">
  <div
    class="block-svg-grid__container"
    style="max-width: {maxWidth};
      height: {height};
      width: 100%;
      margin: 0 auto;"
    >
    <Grid
    vbx={(vbx && vbx > 5) ? vbx : '5'}
    vby={(vby && vby > 5) ? vby : '5'}
    opacity={opacity}
  >
    {@html content}
    </Grid>
  </div>
  <div class="block-svg-grid__inputs">
    <div class="block-svg-grid__fields">
      <div class="block-svg-grid__field">
        <div class="block-svg-grid__label">Max width</div>
        <pre class="block-svg-grid__editable" bind:innerHTML={maxWidth} contenteditable="true" />
      </div>
      <div class="block-svg-grid__field">
        <div class="block-svg-grid__label">Height</div>
        <pre class="block-svg-grid__editable" bind:innerHTML={height} contenteditable="true" />
      </div>
      <div class="block-svg-grid__field">
        <div class="block-svg-grid__label">Grid opacity</div>
        <input class="block-svg-grid__input" bind:value={opacity} type="number" min="0" max="1" step="0.1" />
      </div>
      <div class="block-svg-grid__field">
        <div class="block-svg-grid__label">Grid columns</div>
        <input class="block-svg-grid__input" bind:value={vbx} type="number" max="100" min="5" />
      </div>
      <div class="block-svg-grid__field">
        <div class="block-svg-grid__label">Grid rows</div>
        <input class="block-svg-grid__input" bind:value={vby} type="number" max="100" min="5" />
      </div>
    </div>
    <textarea bind:value={content} bind:this={textarea} class="block-svg-grid__code" rows="4" />
  </div>
</div>