import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './views/App';
import './style';
export const Routes = (props: any) => (
  <Router>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </Router>
);
