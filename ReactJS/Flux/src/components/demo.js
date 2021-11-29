import React, { useState } from 'react';


// function Example() {
//   const [count, setCount] = useState[0];
//
//   return(
//     <div>
//       <p>test{count}</p>
//     <button onClick={()=>
//       setCount({count:count+1})
//     }></button>
//     </div>
//   )
// }


class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <p>test {this.state.count}time</p>
        <button onClick={() =>
          this.setState({ count: this.state.count + 1 })}>
          trying
        </button>
      </div>
    )
  }
}
