import React, { Component } from 'react';
import { btn, success } from '../css/button.css';

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={`${btn} ${success}`}>Click Me</button>
      </div>
    );
  }
}