# FlipBox
> A React Component for FlipBox

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### DEMO
<img src="https://github.com/jacksonCV1114/flip-box/blob/master/demo.gif" width="300"/>


### REACT Typescript Example
```
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

```