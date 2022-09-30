/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

export default function Result() {
  const imageURLDog = useSelector((state) => state.dog);
  const artwork = useSelector((state) => state.artwork);

  return (
    <div className="row">
      <div className="col-md-6 cont age-result attr">
        <strong>Wow! So young ! This artwork is for you to feel wiser :</strong>
        <div className="art-text">
          <strong>Title </strong>: {artwork.title}.
        </div>
        <div className="art-text">
          <strong>Description</strong>: {artwork.description}
        </div>
        <div className="art-text">
          <strong>Artist</strong> : {artwork.artist}.
        </div>
        <div className="art-text">
          <strong>Date</strong> : {artwork.date} y.
        </div>
      </div>
      <div className="col-md-4 cont img-result">
        <img style={{ heigh: '100%' }} src={artwork.imageURL} alt="artwork" />
      </div>
    </div>
  );
}
