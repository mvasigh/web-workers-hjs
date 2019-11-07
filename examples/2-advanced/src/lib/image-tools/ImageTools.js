import { getBlobDominantColor } from './util';

class ImageTools {
  loadImage(imageUrl) {
    return this.getImageBlob(imageUrl).then(blob => getBlobDominantColor(blob));
  }

  getDominantColor(blob) {
    return getBlobDominantColor(blob).then(color => ({
      blob,
      color
    }));
  }

  getImageBlob(imageUrl) {
    return fetch(imageUrl).then(res => res.blob());
  }
}

export default ImageTools
