import React from "react";

export default class MsgTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
    this.setMsg = this.setMsg.bind(this);
  }
  setMsg() {
    this.setState({ msg: "check out" });
  }

  render() {
    return(
      <main>
      <button onClick={this.setMsg}>check</button>
      <p>{this.state.msg}</p>
      </main>
    )
  }
}
