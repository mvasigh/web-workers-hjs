import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './Container';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav class="Navbar">
      <Container>
        <ul class="Navbar-menu">
          <li>
            <Link href="/">Gallery</Link>
          </li>
          <li>
            <Link href="/1234">Detail</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
