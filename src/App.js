import React from 'react';
import './style.css';
import PureComponent from './components/PureComponent';
import CheckAuthenticate from './components/CheckAuthenticate';
export default function App() {
  return (
    <div>
      {CheckAuthenticate(<PureComponent />)}
      {/* <PureComponent message={"hello from parent"}/> */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
