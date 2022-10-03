/* eslint-disable react/destructuring-assignment */
/* eslint-disable default-param-last */
const ArtworkReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTWORK':
      return action.payload;
    case 'FETCH_DATA':
      return [];
    default:
      return state;
  }
};

export default ArtworkReducer;
