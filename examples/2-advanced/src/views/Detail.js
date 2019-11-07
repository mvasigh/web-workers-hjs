import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { Container } from '../components';
import { setTheme } from '../lib/theme';
import './Detail.scss';

const Detail = ({ imageId }) => {
  const imageRef = useRef();
  const imageUrl = `https://picsum.photos/id/${imageId}/640/480`;

  useEffect(() => {
    // ! Load our image in a Web Worker, get its dominant color and set our theme with the color
    // setTheme({
    //   hue: h,
    //   saturation: s,
    //   luminosity: l
    // });
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
