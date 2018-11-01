import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';


export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: []
    }
    this.getTodosForBucket = this.getTodosForBucket.bind(this)
  }

  componentDidMount(){
    console.log('this.props.bucketId', this.props.bucketId)
    this.getTodosForBucket(0)
  }

  getTodosForBucket(bucketId){
    //Get tods
    this.setState({
      "todoList": [
        {
          "_id": "5bd9887fde4f882c275a7795",
          "uid": 1,
          "desc": "first todo desc",
          "title": "first",
          "bucket": "Red"
        },
        {
          "_id": "5bd988a5de4f882c275a7796",
          "uid": 1,
          "desc": "second todo desc",
          "title": "Second",
          "bucket": "Green"
        }
      ]
    })
  }

  render() {
    return (
     <ol>
       {this.state.todoList.map(({title, desc, bucket}) => {
        return (
          <div>
            <li>
              {desc}
            </li>
          </div>
        )
       })}
     </ol>
    )
  }
}
