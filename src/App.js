import React from 'react';
import {BrowserRouter, useLocation, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';

// import UIkit from 'uikit';
// import 'uikit'
// import Icons from 'uikit/dist/js/uikit-icons';

import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import WorksList from './pages/WorksList'
import WorkDetail from './pages/WorkDetail'

function App() {
  const history = require('history').createBrowserHistory;
  return (
    <div className="">
    <BrowserRouter history={history()}>
      <Switch>
        <Route exact path={ process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path={ process.env.PUBLIC_URL + '/about'}  component={About} />
        
          <Route exact path={ process.env.PUBLIC_URL + '/works'}  component={Works} />
          <Route exact path={ process.env.PUBLIC_URL + '/works/:category'}  component={WorksList} />
          
          <Route exact path={ process.env.PUBLIC_URL + '/works/:category/:id'} key='id' component={WorkDetail} />
        {/* <Route exact path={ process.env.PUBLIC_URL + '/services/:dir'}  component={Service} /> */}
        {/* <Route component={NoMatch}/> */}
      </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
