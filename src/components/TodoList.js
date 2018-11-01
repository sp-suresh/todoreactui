import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('TL')
  }

  render() {
    return (
     <div><h1>TL</h1>
     {this.props.children}</div>
    )
  }
}
