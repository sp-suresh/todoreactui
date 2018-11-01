import React, { Component } from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
export default class Buckets extends Component {
  constructor(props){
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      buckets: []
    }
  }

  handleSelect(a, b, c){
    console.log('handleSelect', a, b, c)
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
      <Tabs onSelect={this.handleSelect}>
        <TabList>
          {this.state.buckets.map(({idx, nm}) => {
            return <Tab key={idx} eventKey={idx} title={nm}></Tab>
          })}
        </TabList>
      </Tabs>
      <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
      </Tabs>
      </div>
    )
  }
}
