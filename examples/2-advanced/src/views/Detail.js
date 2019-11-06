import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { Container } from '../components';
import { setTheme } from '../lib/theme';
import ImageTools from '../lib/image-tools';
import './Detail.scss';

const Detail = ({ imageId }) => {
  const imageRef = useRef();
  const imageUrl = `https://picsum.photos/id/${imageId}/640/480`;

  useEffect(() => {
    // Instatiate our Comlink class asynchronously
    new ImageTools()
      .then(imageTools => imageTools.loadImage(imageUrl)) // invoke the instance's `loadImage` method
      .then(result => {
        const hsl = result.color.hsl
        const image = imageRef.current
        image.src = URL.createObjectURL(result.blob) // create an object URL from the blob and set it as image source
        setTheme({
          hue: hsl.h,
          saturation: hsl.s,
          luminosity: hsl.l
        });
      });
  });

  return (
    <Container>
      <div class="Detail">
        <img ref={imageRef} />
      </div>
    </Container>
  );
};

export default Detail;
