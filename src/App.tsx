import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlipBox from './FlipBox';
import FlipBoxFront from './FlipBoxFront';
import FlipBoxBack from './FlipBoxBack';
import {Direction} from './FlipBox'

function App() {
  return (
    <div className="App">
        <FlipBox direction={Direction.v} width='20em' height='10em'>
          <FlipBoxFront backgroundColor='blue' textAlign='left'><p>abc</p></FlipBoxFront>
          <FlipBoxBack backgroundColor='red' textAlign='center'><p>def</p></FlipBoxBack>
        </FlipBox>
    </div>
  );
}

export default App;
