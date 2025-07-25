import React from 'react';
const CheckAuthenticate = (ChildComponent) => {
  const auth = false;
  if (auth) return ChildComponent;
  return 'You are not authorized to view this component';
};
export default CheckAuthenticate;
