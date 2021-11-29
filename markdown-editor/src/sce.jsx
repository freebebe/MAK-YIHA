import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Remarkable from "remarkable";

const md = new Remarkable();

function MarkdownEditor() {
  const [state, setState] = useState({
    value: "Type some *markdown* here!",
  });
  this.handleChange = this.handleChange.bind(this);
  this.getRawMarkup = this.getRawMarkup.bind(this);

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  getRawMarkup() {
    return { __html: md.render(state.value) };
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={state.value}
          />
        </div>
        <div className="output">
          <h3>Markdown</h3>
          <div
            dangerouslySetInnerHTML={this.getRawMarkup()}
            className="output-text"
          >
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;
