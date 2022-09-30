/* eslint-disable default-param-last */
const AgeReducer = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload.data.age;
    default:
      return state;
  }
};

export default AgeReducer;
