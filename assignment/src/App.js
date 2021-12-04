import React, { Component } from 'react';
import './App.css';
import CounterNumber from './CounterNumber';
import Button from './Button';
import BaseButton from './BaseButton';
import IconButton from './IconButton';
import TextButton from './TextButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BaseButton />
        </div>
        <div>
          <IconButton></IconButton>
        </div>
        <div>
          <TextButton />
        </div>
        <div>
          <CounterNumber />
        </div>
      </div>
    
    );
  }
}

export default App;
