import './TextButton.css';
import React, { Component } from 'react';

class TextButton extends Component
{
  render(){
    return(
      <button class="TextB" onClick={()=> window.open("https://coolors.co/palettes/trending", "_blank")}> Find the best color combination!
      </button>
    )
  }
}

export default TextButton;