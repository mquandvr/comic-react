import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './stores/configureStores';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Comic from './containers/Comic';

injectTapEventPlugin();

const store = configureStore();

// let router =  <Provider store={store}>
//     <App />
//   </Provider>;

// const router = (
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
// );

ReactDOM.render(
<Provider store={store}><Comic /></Provider>, document.getElementById('root'));
