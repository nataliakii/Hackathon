/* eslint-disable no-shadow */
/* eslint-disable react/self-closing-comp */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Age from './containers/age';
import Dog from './containers/dog';
import Artwork from './containers/artwork';
import SearchBar from './containers/search-bar';
import './App.css';

function App() {
  const age = useSelector((state) => state.age);
  const conditionalRender = () => {
    if (age === -1 || !age) return null;
    if (age > 45) return <Dog />;
    if (age <= 45) return <Artwork />;
  };
  return (
    <div className="container">
      <div className="col-7">
        <SearchBar />
        <div className="container-image"></div>
        <Age />
        {conditionalRender()}
      </div>
    </div>
  );
}

export default App;
