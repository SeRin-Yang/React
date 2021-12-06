import '../Button.css';
import React, { Component } from 'react';

class IconButton extends Component
{
  render(){
    return(
      <button class="btn baseB" onClick={this.props.func}>
        <img src={this.props.icon} class="icon"/>
      </button>
    )
  }
}

export default IconButton;