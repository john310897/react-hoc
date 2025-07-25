import React, { memo,useEffect } from 'react';

const PureComponent = memo((props) => {
  useEffect(() => {
    console.log('in pure component');
  }, []);
  return <>this is from pure component {props?.message}</>;
});
export default PureComponent;
