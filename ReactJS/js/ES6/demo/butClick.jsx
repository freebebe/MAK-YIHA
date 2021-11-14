class Title extends Component {
  constructor(props) {
    super(props);
    console.log('Title created');
  }
  render() {
    return <h1>Title</h1>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    }
    console.log('app created');
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => { // => 按下按鈕會觸發 onClick 事件
          this.setState({
            isShow: !this.state.isShow
          })
        }}>Toggle</button>
        {isShow && <Title />} // => 如果是 ture 才會 render <Title>
      </div>

        )
  }
}
