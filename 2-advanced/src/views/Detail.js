import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Container } from '../components';
import { setTheme } from '../lib/theme';

const Detail = ({ imageId }) => {
  useEffect(() => {
    setTheme({
      hue: '300',
      saturation: '70%',
      luminosity: '30%'
    });
  });
  return (
    <Container>
      <h1>Detail page: {imageId}</h1>
    </Container>
  );
};

export default Detail;
