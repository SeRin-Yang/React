import './BaseButton.css';
import React, { Component } from 'react';

function sayHello() {
  alert('You clicked me!');
}

class BaseButton extends Component
{
  render(){
    return(
            <button class='BaseB' onClick={this.props.func}>{this.props.name}</button>
    )
  }
}

export default BaseButton;
