import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route path exact="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="register" component={Register} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(
    <Root />,     
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
