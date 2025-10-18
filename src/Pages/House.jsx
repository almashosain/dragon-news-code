import React from 'react';
import { Navigate } from 'react-router';

const House = () => {
  return (
    <div>
      <Navigate to="/category/1"></Navigate>
    </div>
  );
};

export default House;
