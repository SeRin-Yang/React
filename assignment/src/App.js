import React, { Component } from 'react';
import './App.css';
import CounterNumber from './CounterNumber';
import BaseButton from './BaseButton';
import IconButton from './IconButton';
import TextButton from './TextButton';
import icon1 from './sad-outline.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BaseButton func={() => alert("Good Night")} name="Good Morning" />
        </div>
        <div>
          <IconButton func={() => alert("I live in Spain without S")} icon={icon1}/>
        </div>
        <div>
          <TextButton func={()=> window.open("https://coolors.co/palettes/trending", "_blank")} name="Find the best color combination!"/>
        </div>
        <div>
          <CounterNumber />
        </div>
      </div>
    );
  }
}

export default App;
