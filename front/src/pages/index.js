import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  NoMatch,
  NavigationBar
} from '../components'

import ReportCamera from './ReportCamera';

export default function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/report" component={ReportCamera} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Fragment>
  )
}
