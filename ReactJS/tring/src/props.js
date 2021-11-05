import {Component} from "react";
import ReactDOM from 'react-dom';

class CheckMSG extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div>check {this.props.name}</div>
    )
  }
}

CheckMSG.PropTypers = {
  name: React.PropTypes.string,
}

CheckMSG.defaultProps = {
  name: 'Zuck',
}

ReactDOM.render(<CheckMSG name="jarko" />, document.getElementById('apptest'))
