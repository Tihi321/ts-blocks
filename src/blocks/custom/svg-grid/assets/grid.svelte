<script>
  // values viewport x, viewport y, opacity of the grid
  export let vbx = '5';
  export let vby = '5';
  export let opacity = '1';

  function grid(newVbx, newVby) {

    // parse numbers taken as a string from input field.
    const valX = parseInt(newVbx) + 1;
    const valY = parseInt(newVby) + 1;
  
    // create ranged arrayMap from 0 to vbx and vby
    const elements = [...Array(valX)].map((el, inx) => {
      return [...Array(valY)].map((el, iny) => {
  
        // svg dots for coordinates
        const circle = `<circle cx="${inx}" cy="${iny}" r="0.1"></circle>`;
  
        // svg numbers for row and column
        if (iny === 0 && inx === 0) return `<text x="${inx}" y="${iny - 1}">${inx}</text><text x="${inx - 1}" y="${iny}">${inx}</text>${circle}`;
        if (inx === 0) return `<text x="${inx - 1}" y="${iny}">${iny}</text>${circle}`;
        if (iny === 0) return `<text x="${inx}" y="${iny - 1}">${inx}</text>${circle}`;
  
        return circle;
      }).join('');
    });
    return elements.join('');
  };
</script>

<div class="svg-grid__outer">
  <svg class="svg-grid" fill="#28536B" width="100%" viewBox="0 0 {vbx} {vbx}" style="overflow: visible;">
    <g class="svg-grid__path" stroke="#609295" stroke-width="0.2" fill="transparent">
      <slot></slot>
    </g>
    <g class="svg-grid__grid" style="opacity: {opacity};">{@html grid(vbx, vby)}</g>
  </svg>
</div>