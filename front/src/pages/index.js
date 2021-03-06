import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  NoMatch,
  NavBarFooter,
  PageContainer
} from "../components";

import Reports from "./Reports";
import Report from "./Report";
import ReportCamera from "./ReportCamera";
import { Jumbotron } from "../components";

export default function App() {
  return (
    <Fragment>
      <Jumbotron>
        <PageContainer>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/photo" component={ReportCamera} />
              <Route path="/reports" component={Reports} />
              <Route path="/report/:reportId" children={<Report />} />
              <Route component={NoMatch} />
            </Switch>
            <NavBarFooter />
          </Router>
        </PageContainer>
      </Jumbotron>
    </Fragment>
  );
}
