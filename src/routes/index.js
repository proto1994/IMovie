import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import ListPage from '../pages/list';
const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ListPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
