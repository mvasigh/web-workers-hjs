import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Container } from '../components';
import { fetchWallpapers } from '../lib/reddit';
import { setTheme } from '../lib/theme';

import './Gallery.scss';

const Gallery = () => {
  useEffect(() => {
    setTheme({
      hue: '180',
      saturation: '10%',
      luminosity: '15%'
    });
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
