import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import App from './App';
import './index.css';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { State } from './types/types';
import { rootReducer } from './redux/reducers';

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function saveToLocalStorage(state: State) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const persistedState = loadFromLocalStorage();
const store = createStore(rootReducer, persistedState, composeEnhancers());
store.subscribe(() => saveToLocalStorage(store.getState() as State));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
