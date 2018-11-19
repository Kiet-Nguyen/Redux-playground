import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import reducerCounter from './store/reducers/counter';
import reducerResult from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: reducerCounter,
  res: reducerResult,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
