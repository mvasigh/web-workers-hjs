import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Container, ThumbnailList, Thumbnail } from '../components';
import { fetchImages } from '../lib/images';
import { setTheme } from '../lib/theme';

import './Gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setTheme({
      hue: 180,
      saturation: 10,
      luminosity: 15
    });

    setImages(fetchImages());
  }, []);

  return (
    <Container>
      <div class="Gallery">
        <h2>Gallery</h2>
        <ThumbnailList>
          {images.map(image => (
            <Thumbnail id={image.id} title={image.title} src={image.src} />
          ))}
        </ThumbnailList>
      </div>
    </Container>
  );
};

export default Gallery;
