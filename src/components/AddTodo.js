import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import {todoApiHost} from '../config'
import {getRequest, postRequest} from '../lib/net'

export default class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      buckets: [],
      currBucket: 1
    }
    this.submliTodo = this.submliTodo.bind(this)
  }

  componentDidMount(){
    getRequest(`${todoApiHost}todo/buckets/`, (d) => {
      this.setState({buckets: JSON.parse(d.response)})
    })
  }

  submliTodo(){
    var todo = {
      title: this.refs.txtTitle.value || "",
      desc: this.refs.txtDesc.value || "",
      bucketId: parseInt(this.refs.drpBucket.value) || 1
    }

    if(!todo.title.length || !todo.desc.length){
      return alert('Please add Title and Description')
    }
    this.props.refreshTodoList(todo.bucketId)
    postRequest(`${todoApiHost}todo/`, todo, (resp) => {
      if(resp.status === 200){
        this.setState({msg: 'Todo Added Successfully'})
        this.refs.txtTitle.value = ""
        this.refs.txtDesc.value = ""
        this.refs.drpBucket.value = 1
      }
      else {
        this.setState({msg: 'Sorry, something went wrong!'})
      }
      setTimeout(() => {this.setState({msg: ''})}, 2000)
    })

  }

  render() {
    return (
      <div style={{border:'1px solid black', 'height': '45vh', 'border-radius': '5px'}}>
        <div>
          <h3>Title </h3><input ref="txtTitle" maxLength="25" type="text" autofocus="true"/>
          <h3>Description </h3><textarea maxLength="50" ref="txtDesc" type="text"/>
        </div>
        <div style={{'overflow': 'auto'}}>
          <select ref="drpBucket">
            {this.state.buckets.map(({idx, nm}) => {  
              return (
                <option key={idx} value={idx}>{nm}</option>
              )
            })}
         </select>
         <button style={{margin: '5px'}} onClick={this.submliTodo}>Submit</button>
        </div>
        <label style={{margin: '5px', 'color': 'green'}}>{this.state.msg}</label>
      </div>
    )
  }
}
