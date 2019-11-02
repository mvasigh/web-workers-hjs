import { h } from 'preact';
import './Container.scss';

const Container = ({ children, ...props }) => {
  return (
    <div class="Container" {...props}>
      {children}
    </div>
  );
};

export default Container;
