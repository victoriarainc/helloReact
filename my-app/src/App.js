import React, { Component } from 'react';
import profile from './Victoria.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={profile} alt="my picture" />
          <h2>Hello World!</h2>
        </div>
        <p className="App-intro">
          My name is Victoria!
        </p>
      </div>
    );
  }
}

export default App;
