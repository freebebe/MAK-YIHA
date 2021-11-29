import { Component } from 'react';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;  
  }  
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;  
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

import { useState, useEffect } from 'react';
export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {    
    // 使用瀏覽器 API 更新文件標題    
    document.title = `You clicked ${count} times`;  
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
