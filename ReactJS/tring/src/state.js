import {Component} from "react";
import ReactDOM from 'react-dom';

class TimerCheck extends Component{
  constructor(props) {
    super(props)
    this.check = this.check.bind(this);
    this.state = {
      secondsElapsed: 0,
    }
  }

  check() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1})
  }
  componentDidMount() {
    this.interval = setInterval(this.check, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return(
      <div>time tick: {this.state.secondsElapsed}</div>
    )
  }
}

ReactDOM.render(<TimerCheck />, document.getElementById('apptest'))
