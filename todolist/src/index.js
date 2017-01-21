import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from
'react-redux';
import { createStore } from
'redux';
import App from './components/App';
import './index.css';
import todoApp from './reducers';


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

let store = createStore(todoApp);

 ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
