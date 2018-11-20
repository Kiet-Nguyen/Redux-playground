import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
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

// Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      
      return result;
    }
  }
}

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

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
