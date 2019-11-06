import { h, Fragment } from 'preact';
import { Link } from 'preact-router'
import './Thumbnail.scss';

const Thumbnail = ({ id, src = '', onClick = () => {}, ...props }) => {
  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Fragment>
      <Link
        href={`/${id}`}
        class="Thumbnail"
        style={{
          background: `url(${src})`,
          backgroundSize: 'cover'
        }}
      />
    </Fragment>
  );
};

export default Thumbnail;
