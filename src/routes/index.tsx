import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../pages/home';
import ListPage from '../pages/list';
import PersonPage from '../pages/person';
import store from '../ducks/store';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/list" component={ListPage} />
          <Route exact path="/person" component={PersonPage} />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
