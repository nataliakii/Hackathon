/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtwork } from '../actions';

export default function Result() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);
  useEffect(() => {
    dispatch(fetchArtwork());
  }, [age]);

  const artwork = useSelector((state) => state.artwork);

  const artRender = () => {
    if (!artwork.title) {
      return <div>Loading</div>;
    }
    return (
      <>
        <div className="col-md-6 cont age-result attr">
          <strong>
            Wow! So young ! This artwork is for you to feel wiser :
          </strong>
          <div className="art-text">
            <strong>Title </strong>: {artwork.title}.
          </div>
          <div className="art-text">
            <strong>Description</strong>: {artwork.description}
          </div>
          <div className="art-text">
            <strong>Artist</strong>: {artwork.artist}.
          </div>
          <div className="art-text">
            <strong>Date</strong>: {artwork.date} y.
          </div>
        </div>
        <div className="col-md-4 cont img-result">
          <img style={{ heigh: '100%' }} src={artwork.imageURL} alt="artwork" />
        </div>
      </>
    );
  };
  return (
    <div className="row" style={{ margin: '25px' }}>
      {artRender()}
    </div>
  );
}
