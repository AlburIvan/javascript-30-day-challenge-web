import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <span className="challenge-digit">30</span>
        <div className="challenge__viewer">
          <span className="challenge__viewer_title"></span>
          <div className="challenge__viewer_carousel"></div>
          <div className="challenge__viewer_description"></div>
          <span className="challenge__viewer_carousel_left">{'<'}</span>
          <span className="challenge__viewer_carousel_right">></span>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
