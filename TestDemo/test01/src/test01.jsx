import { useState } from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <p>try to clicked {this.state.value} name</p>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          click
        </button>
      </div>
    );
  }
}
