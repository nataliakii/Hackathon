/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDog } from '../actions';

export default function Result() {
  const imageURLDog = useSelector((state) => state.dog);
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDog());
  }, [age]);

  return (
    <div className="row" style={{ margin: '25px' }}>
      <div className="col-md-6 cont age-result">
        Oh, dear, your are not young, but no worries, since you don't have long
        to live, try to just enjoy it all. Start with enjoying this pic, isn't
        this dog adorable ?
      </div>
      <div className="col-md-4 cont img-result">
        <img src={imageURLDog} alt="dog" />
      </div>
    </div>
  );
}
