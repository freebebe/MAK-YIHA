import{ useState,Component } from "react";
import "./App.css";
import Remarkable from "remarkable";

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Type some *markdown* here!",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={this.state.value}
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
  };
}

