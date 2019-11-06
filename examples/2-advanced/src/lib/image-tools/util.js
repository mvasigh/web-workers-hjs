import convert from 'color-convert';

export function getBlobDominantColor(blob) {
  return createImageBitmap(blob).then(bitmap => {
    const canvas = new OffscreenCanvas(1, 1);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const [r, g, b, a] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
    const [h, s, l] = convert.rgb.hsl(r, g, b);
    return {
      blob,
      color: {
        rgb: {
          r,
          g,
          b,
          a
        },
        hsl: {
          h,
          s,
          l
        }
      }
    };
  });
}
