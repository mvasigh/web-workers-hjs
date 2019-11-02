import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { Container } from '../components';

const Detail = ({ imageId }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--app-hue', '300');
    document.documentElement.style.setProperty('--app-saturation', '70%');
  });
  return (
    <Container>
      <h1>Detail page: {imageId}</h1>
    </Container>
  );
};

export default Detail;
