import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import {todoApiHost} from '../config'
import {getRequest} from '../lib/net'

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: []
    }
    this.getTodosForBucket = this.getTodosForBucket.bind(this)
  }

  getTodosForBucket(bucketId){
    getRequest(`${todoApiHost}todo?bucketId=${bucketId || 0}&lmt=50/`, (d) => {
      this.setState({todoList: JSON.parse(d.response).todoList})
    })
  }

  componentWillReceiveProps(nextProps) {
    this.getTodosForBucket(nextProps.bucketId)
  }

  render() {
    return (
      <div>
        <ul>
         {this.state.todoList.map(({title, desc, bucket}) => {
          return (
            <div>
              <li style={{'alignItems': 'center', 'display': 'flex', 'cursor': 'pointer'}} title={title} >
                <div style={{padding:10,
                  margin:20,
                  backgroundColor: bucket,
                  display:"inline-block",
                  borderRadius: "50%",
                  width:10,
                  height:10,}}>
                </div>
                <p>{desc}</p>
              </li>
            </div>
          )
         })}
        </ul>
      </div>
    )
  }
}
