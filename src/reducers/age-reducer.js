/* eslint-disable default-param-last */
const AgeReducer = function (state = -1, action) {
  switch (action.type) {
    case 'FETCH_AGE':
      return action.payload.data.age;
    default:
      return state;
  }
};

export default AgeReducer;
