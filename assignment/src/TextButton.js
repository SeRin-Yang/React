import './TextButton.css';
import React, { Component } from 'react';

class TextButton extends Component
{
  render(){
    return(
      <button class="TextB" onClick={this.props.func}> {this.props.name} </button>
    )
  }
}

export default TextButton;