import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(){
        alert(`hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
          {/* passing method to child */}
          <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default Parent