import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div className="ui field">
        <label>{this.context === "english" ? "name" : "Name"}</label>
        <input type="text" className="input" />
      </div>
    );
  }
}

export default Field;
