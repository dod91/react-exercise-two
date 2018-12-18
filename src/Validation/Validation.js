import React from 'react';
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;

const Validation = (props) => {
  const { length } = props;
  let validation = 'OK';
  if (length < MIN_LENGTH) {
    validation = 'TOO SHORT';
  }
  if (length > MAX_LENGTH) {
    validation = 'TOO LONG';
  }
  return (
    <div className="Validation">
      <p>{validation}</p>
    </div>
  )
}

export default Validation;
