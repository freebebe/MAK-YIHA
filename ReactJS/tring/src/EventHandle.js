import React from "react";

const CheckList = (props) => (
  <ul>
    {
      props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
)

export default class CheckApp extends React.Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [],
      text: '',
    }
  }
    onChange(e) {
      this.setState({text: e.target.value});
    }
    handleSubmit(e) {
      e.preventDefault();
      const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}])
      const nextText = '';
      this.setState({items: nextItems, text: nextText});
    }
    render() {
      renturn(
        <div>
        <h3>test Toggle</h3>
          <CheckList items={this.state.items} />
          <form onSubmit{...this.handleSubmit} action="">
            <input onChange={this.onChange} value={this.state.text} type="" />
            <button>{`Add #` + (this.state.items.length + 1)}</button>
          </form>
        </div>
      )
    }
}
