import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './Container';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav class="Navbar">
      <Container>
        <Link href="/">Home</Link>
      </Container>
    </nav>
  );
};

export default Navbar;
