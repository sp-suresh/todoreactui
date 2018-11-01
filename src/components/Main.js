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

    // this.setState({
    //   "todoList": [
    //     {
    //       "_id": "5bd9887fde4f882c275a7795",
    //       "uid": 1,
    //       "desc": "first todo desc",
    //       "title": "first",
    //       "bucket": "Red"
    //     },
    //     {
    //       "_id": "5bd988a5de4f882c275a7796",
    //       "uid": 1,
    //       "desc": "second todo desc",
    //       "title": "Second",
    //       "bucket": "Green"
    //     }
    //   ]
    // })

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
        <TabPanel>
          <TodoList bucketId={this.state.bucketId} />
        </TabPanel>
      </Tabs>
      </div>
    )
  }
}
