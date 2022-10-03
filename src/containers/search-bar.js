import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAge } from '../actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);
  const handleClick = () => {
    dispatch({ type: 'FETCH_DATA', payload: [] });
    dispatch(fetchAge(input));
  };
  return (
    <div className="input-group mb-4">
      <h5 style={{ marginTop: '38px', color: '#154360' }}>
        Welcome! This app is here to entertain you. We just need your name for
        starting the process.
      </h5>
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
  );
};

export default SearchBar;
