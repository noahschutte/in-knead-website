import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img style={{width: 50, height: 50, display: 'inline-block'}} src={require('./logo.png')} alt={'logo'} />
        <h1 style={{display: 'inline-block', marginLeft: 15}}>
          in knead
        </h1>
      </div>
    )
  }
}

export default App;
