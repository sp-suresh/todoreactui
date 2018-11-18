import React, { Component } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import {todoApiHost} from '../config'
import {getRequest} from '../lib/net'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.refreshTodoList = this.refreshTodoList.bind(this)
    this.state = {
      currBucket: 0,
      buckets: []
    }
  }

  handleSelect(bucketId){
    this.setState({currBucket: bucketId})
  }

  refreshTodoList(bucketId){
    if(this.state.currBucket === bucketId){
      this.setState({currBucket: bucketId})
    }
    else if(this.state.currBucket === 0){
      this.setState({currBucket: 0})
    }
  }

  componentDidMount(){
    getRequest(`${todoApiHost}todo/buckets/`, (d) => {
      this.setState({buckets: JSON.parse(d.response)})
    })
  }

  render() {
    return (
      <div style={{border:'1px solid black', 'border-radius': '5px'}}>
        <div>
        <Tabs>
          <TabList>
            <Tab style={{'text-align': 'center', 'min-width': '25%', 'color': 'grey' }} key={0}  onClick={() => {this.handleSelect(0)}}>All</Tab>
            {this.state.buckets.map(({idx, nm}) => {
              return <Tab style={{'text-align': 'center', 'width': '25%', 'color': `${nm}`}} key={idx} onClick={() => {this.handleSelect(idx)}}>{nm}</Tab>
            })}
          </TabList>
        </Tabs>
        </div>
        <div>
          <div class="col-8 col-s-8"><AddTodo buckets={this.state.buckets} refreshTodoList={this.refreshTodoList} /></div>
          <div><TodoList bucketId={this.state.currBucket} /></div>
        </div>
      </div>
    )
  }
}
