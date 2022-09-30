/* eslint-disable react/self-closing-comp */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from './containers/search-bar';

import './App.css';

function App() {
  return (
    <div>
      <Route path="/" component={SearchBar} />
      <div className="container-image"></div>
    </div>
  );
}

export default App;
