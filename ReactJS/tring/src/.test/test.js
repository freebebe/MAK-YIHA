import React from "react";

export default class Msg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: "",
    };
    this.setMSG = this.setMSG.bind(this)
  }

  setMSG() {
    this.setState({ msg1: "chekc out" });
  }
  render(){
    rentur(
      <main>
        <button onClick={this.setMSG}>test message</button>
        <p>{this.state.msg1}</p>
      </main>
    )
  }
}
