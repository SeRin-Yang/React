import React, { Component } from 'react';
import './App.css';
import CounterNumber from './components/CounterNumber/CounterNumber';
import BaseButton from './components/Button/BaseButton/BaseButton';
import IconButton from './components/Button/IconButton/IconButton';
import TextButton from './components/Button/TextButton/TextButton';
import icon1 from './sad-outline.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseButton func={() => alert("Good Night")} name="Good Morning" />
        <IconButton func={() => alert("I live in Spain without S")} icon={icon1}/>
        <TextButton func={()=> window.open("https://coolors.co/palettes/trending", "_blank")} name="Find the best color combination!"/>
        <CounterNumber />
      </div>
    );
  }
}

export default App;
