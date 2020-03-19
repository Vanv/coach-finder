import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#f5f5f5', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555', emailBtn: '#007bff', color: '#ffffff'},
    darkThemeText: false
  }

  colorTheme = () => {
    this.setState({
      isLightTheme : !this.state.isLightTheme,
      darkThemeText: !this.state.darkThemeText
    })
  }

  render() {
    return(
      <ThemeContext.Provider value={{...this.state, colorTheme: this.colorTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;
