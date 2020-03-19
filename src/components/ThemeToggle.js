import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {

  static contextType = ThemeContext;

  render() {
    const { colorTheme } = this.context;
    return(
      <div className="text-right">
        <button className="btn btn-secondary btn-sm ml-2" onClick={colorTheme}>Color Theme </button>
      </div>
    )
  }
}

export default ThemeToggle;
