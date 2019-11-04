import { h, Fragment } from 'preact';
import Router from 'preact-router';
import { Gallery, Detail } from './views';
import { Navbar } from './components';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Gallery path="/" />
        <Detail path="/:imageId" />
      </Router>
    </Fragment>
  );
};

export default App;
