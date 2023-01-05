# FlipBox
> A React Component for FlipBox

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Demo Website

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Example
```
<html>
     <body>
        <div id="target1" style="position:absolute;top:1000px;">
            <p> I am the long long long long long long long long long target</p>
        </div>  
        <div id="target2" style="position:absolute;top:300px;">
            <p> I am the target</p>
        </div>  
        <div id="target3" style="position:absolute;top:300px;left:400px">
            <p> I am the target</p>
        </div>  
    </body>
  
    <script>
        const stepList = [];
        stepList.push(new Step('target1',`<img width='200px' height='200px' src="image.jpg">`,`Let me show you`))
        stepList.push(new Step('target2','Title 2','Description2'))
        stepList.push(new Step('target3','Title 3','Description3'))
        const tinyTour = new TinyTour(stepList);
    </script>
</html>
```