import {Component, useState} from 'react';
import ReactDOM from 'react-dom';


function App(props) {
  const [state, setState] = useState();

  return (
    <div>

    </div>
  )
}
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state ={};
//   }
//
//   render() {
//     return(
//       <div>
//       
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
