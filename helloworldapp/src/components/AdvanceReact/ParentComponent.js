import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComponent from './PureComponent'
import RegComponent from './RegComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Akshay"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"ak"
            })

        },2000)
    }
    render() {
    return (
      <div>ParentComponent
          <RegComponent name={this.state.name} />
          <PureComponent name={this.state.name} />
          {/* <MemoComponent/> */}
      </div>
    )
  }
}

export default ParentComponent