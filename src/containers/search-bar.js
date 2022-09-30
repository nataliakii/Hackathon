/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Age from './age';
import { fetchData } from '../actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleClick = () => {
    dispatch(fetchData(input));
  };
  return (
    <div className="container">
      <div className="col-7">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
            aria-label="searchBar"
            placeholder="This input is for name"
            value={input}
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-outline-secondary"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <Age />
      </div>
    </div>
  );
};

export default SearchBar;
