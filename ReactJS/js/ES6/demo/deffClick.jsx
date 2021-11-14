class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Titile'
    }
  }

  // => 加入這段，過兩秒後會變成 new Title
  componentDidMount() {
    setTimeout(() => {
      console.log('changed title!');
      this.setState({
        title: 'new Title'
      })
    }, 2000);
  }

  render() {
    const { title } = this.state;
    return <h1>{title}</h1>
  }
}
