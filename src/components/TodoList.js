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
            <div class="col-4 col-s-4 col-v-13 col-v-26 col-v-hn">
              <li class="col-v-li-13 col-v-li-26" style={
                {'alignItems': 'center', 
                  'display': 'flex',
                  'cursor': 'pointer', 
                  'border': '1px solid black', 
                  'border-radius': '5px',
                  'margin-top': '2px'
                }
                } title={title} >
                <div style={{'padding':10,
                  'margin':20,
                  'border': `6px solid ${bucket}`,
                  'border-radius': '50%',
                  'width': '10px',
                  'height': '10px'}}>
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


