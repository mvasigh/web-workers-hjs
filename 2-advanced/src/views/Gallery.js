import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Container } from '../components';

import './Gallery.scss';

const Gallery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--app-hue', '270');
  }, []);

  return (
    <Container>
      <div class="Gallery">Gallery page</div>
    </Container>
  );
};

export default Gallery;
