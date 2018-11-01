import React, { Component } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import '../css/Buckets.css'
import 'react-tabs/style/react-tabs.css';
import TodoList from './TodoList'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      buckets: [],
      todoList: []
    }
  }

  handleSelect(bucketId){
    console.log('bucketId', bucketId)
    //Get contents from bucketId
    this.setState({bucketId: bucketId})
  }

  componentDidMount(){
    console.log('Buckets')
    this.setState({
      buckets: [
        {
        "idx": 1,
        "nm": "Red"
        },
        {
        "idx": 2,
        "nm": "Green"
        },
        {
        "idx": 3,
        "nm": "Blue"
        }
      ]
    })
  }

  render() {
    return (
      <div>
      <Tabs>
        <TabList>
          <Tab key={0}  onClick={() => {this.handleSelect(0)}}>All</Tab>
          {this.state.buckets.map(({idx, nm}) => {
            return <Tab key={idx} onClick={() => {this.handleSelect(idx)}}>{nm}</Tab>
          })}
        </TabList>
        <div>
          <TodoList bucketId={this.state.bucketId} />
        </div>
      </Tabs>
      </div>
    )
  }
}
