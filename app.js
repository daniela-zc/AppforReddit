import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import RedditApp from './reducers/RedditApp'
import App from "./components/App";

import thunkMiddleware from 'redux-thunk'
import { fetchResults, changeCategory } from './actions'

let store = createStore(
  RedditApp,
   applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

export const DEFAULT_CATEGORY = 'images';

store.dispatch(changeCategory(DEFAULT_CATEGORY))
store.dispatch(fetchResults(DEFAULT_CATEGORY))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);
