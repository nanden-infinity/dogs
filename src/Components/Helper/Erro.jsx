import React from 'react';

export const Error = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error">{message}</p>
    </div>
  );
};
