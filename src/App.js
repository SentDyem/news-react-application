import React from 'react';
import './App.css';
import News from "./components/News/News";
import Comments from "./components/Comments/Comments";
import myNews from "./components/News/Data/myNews";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Tests/Add';
import TestInput2 from "./components/Tests/TestInput2";

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
            <h1 className="jumbotron text-center shadow-sm">Azure News <img src="https://lh3.googleusercontent.com/proxy/aK7cgtAicNQnR6lVjcSPV0rtw3ozroVCam8UvLF_wUyFGrnjhfd6JXDqRII8fwSqfmDc1tXalzV8RC9n8__d4ZckotQqWdkk9riGdqqhd1-yu2__vhhJmVoqbE1NUPEF45W02m9r3SLIFfuSqCOyDirbSb6Ib452wrXAM9ZKE28Mpd3yaIGHKO8vkw" alt=""/></h1>
        </div>
      <News data = {myNews}/>
      <Comments />
      <Add />
    </div>
  );
}

export default App;
