import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Container } from '../components';
import { fetchWallpapers } from '../lib/reddit';

import './Gallery.scss';

const Gallery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--app-hue', '180');
    document.documentElement.style.setProperty('--app-saturation', '10%');
    fetchWallpapers().then(wallpapers => console.log(wallpapers));
  }, []);

  return (
    <Container>
      <div class="Gallery">
        <h2>Wallpapers</h2>
      </div>
    </Container>
  );
};

export default Gallery;
