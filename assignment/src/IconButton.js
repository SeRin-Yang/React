import './IconButton.css';
import React, { Component } from 'react';

class IconButton extends Component
{
  render(){
    return(
      <button class="IconB" onClick={this.props.func}> <img src={this.props.icon} class="Icon" /> </button>
    )
  }
}

export default IconButton;