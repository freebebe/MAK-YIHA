import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const componentDidMount = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  const componentDidUpdate = () => {
    document.title = `You clicked ${this.state.count} times`;
  };

  return (
    <div>
      <p>checked {count} times</p>
      <button onClick={()=>setCount(+1)}></button>
    </div>
  )
}
