import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderLanguage = value => {
    return value === "english" ? "Submit" : "Senden";
  };

  renderColor = color => {
    return (
      <button className={`ui button ${color} `}>
        <LanguageContext.Consumer>
          {value => this.renderLanguage(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
