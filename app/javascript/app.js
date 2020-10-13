import React, { Fragment } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/menu';

import 'react-bulma-components/dist/react-bulma-components.min.css';


const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Menu/>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
