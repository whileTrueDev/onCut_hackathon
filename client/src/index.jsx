import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RegistStepper from './pages/Regist/Stepper';
import Main from './pages/Main';
import CreatorDashboard from './pages/Dashboard/layouts/CreatorDashboardLayout';
import CreatorDashboardDoor from './pages/Dashboard/layouts/CreatorDashboardDoor';
import MarketerDashboard from './pages/Dashboard/layouts/MarketerDashboardLayout';
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route exact path="/" component={Main} history={history} />
    <Route exact path="/regist" component={RegistStepper} />
    <Route path="/dashboard/creator/door" component={CreatorDashboardDoor} history={history} />
    <Route path="/dashboard/creator" component={CreatorDashboard} history={history} />
    <Route path="/dashboard/marketer" component={MarketerDashboard} history={history} />
  </Router>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
