/* eslint-disable react/destructuring-assignment */
/* eslint-disable default-param-last */
const AgeReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_DOG':
      return action.payload;
    case 'FETCH_DATA':
      return [];
    default:
      return state;
  }
};

export default AgeReducer;
