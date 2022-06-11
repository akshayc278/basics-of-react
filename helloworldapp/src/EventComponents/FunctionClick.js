import React, { Component } from 'react'

export class FunctionClick extends Component {
  clickhandler(){
    console.log('click the button')
  }
  render() {
    return (
      <button onClick={this.clickhandler}>click</button>
      
    )
  }
}

export default FunctionClick
