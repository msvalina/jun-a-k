import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Report from './views/Reports';
import TakePhoto from './views/TakePhoto';

class App extends React.Component {
    public render() {
        return (
            <Router>
             <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/takePhoto">Take Photo</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                </ul>
                </nav>
                <Switch>
                    <Route exact={true} path="/" component={Report} />
                    <Route exact={true} path="/takePhoto" component={TakePhoto} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
