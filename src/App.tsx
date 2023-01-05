import React from 'react';
import FlipBox from './FlipBox';
import FlipBoxFront from './FlipBoxFront';
import FlipBoxBack from './FlipBoxBack';
import {Direction} from './FlipBox'

function App() {
  return (
    <div className="App">
        <h1>Horizontal FlipBox</h1>
        <FlipBox direction={Direction.h} width='20em' height='10em'>
          <FlipBoxFront backgroundColor='#4E5A6C' textAlign='left' color='white'>
          <div style={{margin:'1em',textAlign:'center'}}>
            <img src='/logo.svg' alt="logo" width='80em'></img>
            <p>CONTENT AT FRONT</p>
            <p>Vertically Flip Demo</p>
          </div>
          </FlipBoxFront>
          <FlipBoxBack backgroundColor='#ebdfc7' textAlign='center' color='black'>
          <div style={{margin:'1em',textAlign:'center'}}>
            <img src='/logo.svg' alt="logo" width='80em'></img>
            <p>CONTENT AT BACK</p>
            <p>Vertically Flip Demo</p>
          </div>
          </FlipBoxBack>
        </FlipBox>
        
        <h1>Vertical FlipBox</h1>
        <FlipBox direction={Direction.v} width='20em' height='10em'>
          <FlipBoxFront backgroundColor='#4E5A6C' textAlign='left' color='white'>
          <div style={{margin:'1em',textAlign:'center'}}>
            <img src='/logo.svg' alt="logo" width='80em'></img>
            <p>CONTENT AT FRONT</p>
            <p>Vertically Flip Demo</p>
          </div>
          </FlipBoxFront>
          <FlipBoxBack backgroundColor='#ebdfc7' textAlign='center' color='black'>
          <div style={{margin:'1em',textAlign:'center'}}>
            <img src='/logo.svg' alt="logo" width='80em'></img>
            <p>CONTENT AT BACK</p>
            <p>Vertically Flip Demo</p>
          </div>
          </FlipBoxBack>
        </FlipBox>
    </div>
  );
}

export default App;
