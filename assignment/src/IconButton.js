import icon from './sad-outline.svg';
import './IconButton.css';
import React, { Component } from 'react';

function saySomething() {
  alert("It's hard to learn React!");
}

class IconButton extends Component
{
  render(){
    return(
      <button class="IconB" onClick={saySomething}> <img src={icon} class="Icon" /> </button>
    )
  }
}

export default IconButton;