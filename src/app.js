import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import store, {history} from 'store';

require('./index.scss');

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={}>
        <IndexRoute component={} />
        <Route path="" component={} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('container'));
