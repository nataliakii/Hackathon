/* eslint-disable default-param-last */
const ArtworkReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_ARTWORK':
      return action.payload;
    default:
      return state;
  }
};

export default ArtworkReducer;
