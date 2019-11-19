import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Report from './views/Reports';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <Route exact={true} path="/" component={Report} />
            </Router>
        );
    }
}

export default App;
