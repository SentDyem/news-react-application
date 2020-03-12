import React from 'react';
import './App.css';
import News from "./components/News/News";
import Comments from "./components/Comments/Comments";
import myNews from "./components/News/Data/myNews";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <div className="jumbotron">
            <h1>Новостной портал</h1>
        </div>
      <News data = {myNews} />
      <Comments />
    </div>
  );
}

export default App;
