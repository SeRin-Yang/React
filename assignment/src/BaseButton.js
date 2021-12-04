import './BaseButton.css';
import React, { Component } from 'react';

function sayHello() {
  alert('You clicked me!');
}

class BaseButton extends Component
{
    render(){
        return(
                <button class='BaseB' onClick = {sayHello}>Base Button</button>
        )
    }
}

export default BaseButton;
