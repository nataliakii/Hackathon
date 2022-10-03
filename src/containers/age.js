import React from 'react';

import { useSelector } from 'react-redux';

export default function Age() {
  const age = useSelector((state) => state.age);

  if (age === -1) return null;
  if (!age)
    return (
      <div style={{ marginLeft: '23px' }}>
        We don't have this name, please try another one
      </div>
    );

  return (
    <div className="result">
      <h5 className="age">Your age is {age}...</h5>
    </div>
  );
}
