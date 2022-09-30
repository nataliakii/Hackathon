/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDog, fetchArtwork } from '../actions';
import Artwork from './artwork';
import Dog from './dog';

export default function Age() {
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();

  if (age > 45) {
    dispatch(fetchDog());
  } else {
    dispatch(fetchArtwork());
  }

  return (
    <div className="result">
      <h5 className="age">Your age is {age}...</h5>
      <Switch>
        <Dog />
        <Artwork />
      </Switch>
    </div>
  );
}
