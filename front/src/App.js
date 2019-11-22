import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import ReportCamera from './components/ReportCamera';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Route exact path="/" component={Home} />
            <Layout>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/report" component={ReportCamera} />
              <Route component={NoMatch} />
            </Switch>
            </Layout>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
