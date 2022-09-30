/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Result() {
  const imageURLDog = useSelector((state) => state.dog);

  return (
    <div className="row">
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
