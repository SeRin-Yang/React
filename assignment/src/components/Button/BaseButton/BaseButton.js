import '../Button.css';
import React, { Component } from 'react';

class BaseButton extends Component
{
  render(){
    return(
      <button class='btn baseB' onClick={this.props.func}>
        {this.props.name}
      </button>
    )
  }
}

export default BaseButton;
