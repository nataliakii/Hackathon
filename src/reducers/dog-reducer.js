/* eslint-disable default-param-last */
const AgeReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_DOG':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default AgeReducer;
