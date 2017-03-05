import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={}>
    <IndexRoute component={} />
    <Route path="library" component={} />
  </Route>
);
