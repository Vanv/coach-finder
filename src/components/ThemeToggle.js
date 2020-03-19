import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {

  static contextType = ThemeContext;

  render() {
    const { colorTheme, isLightTheme } = this.context;
    const btnText = isLightTheme ? 'Dark Theme' : 'Light Theme'
    return(
      <div className="text-right">
        <button className="btn btn-secondary btn-sm ml-2" onClick={colorTheme}>
        { btnText}
         </button>
      </div>
    )
  }
}

export default ThemeToggle;
