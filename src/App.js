import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home/Home';
import TermsAndConds from './TermsAndConds/TermsAndConds';
import CookiePolicy from './CookiePolicy/CookiePolicy';


function App() {
  return (
    <>
      {/* RENDER HERE PAGES */}

      <Router>
        <Switch> {/* load only one route at a time */}

          <Route path='/' exact component={ Home } />
          <Route path='/terms-and-conditions' component={ TermsAndConds } />
          <Route path='/cookie-policy' component={ CookiePolicy } />

        </Switch>
      </Router>
    </>
  );
}

export default App;
