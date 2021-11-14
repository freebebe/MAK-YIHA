import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  render() {
      let listItems
      if(this.state.data){
        listItems = this.state.data.map((item, i)=>{
          <p key={i}>{item.name}</p>
        })
      } else {
        listItems = <p> reload </p>
      }
      return{listItems}
      componentDidMount() {
        fetch('https://google.com').then((res)=>{
          res.json()).then((json) =>{
            this.setState({data:json})
          }
      })
    }
  }
}
