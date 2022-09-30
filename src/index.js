import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { configureStore } from '@reduxjs/toolkit';

import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise)(configureStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware({ reducer: reducers })}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
