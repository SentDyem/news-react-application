import React from 'react';
import './App.css';
import News from "./components/News";
import Comments from "./components/Comments";
import myNews from "./components/myNews";

function App() {
  return (
    <div className="App">
      <News data = {myNews} />
      <Comments />
    </div>
  );
}

export default App;
