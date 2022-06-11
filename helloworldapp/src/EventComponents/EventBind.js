import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
            this.state = {
                message: 'Hello'
            }
        this.clickHandler= this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:' welcome '
        })
        console.log(this.message)
    }

    // new arrow function

    clickHandlerNew = () => {
        this.setState({
            message: 'exit'
        })
    }
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* approach 1 : binding in render Every update require new component handler*/}
            {/*<button onClick={this.clickHandler.bind(this)}>Click to change message</button> */ }
            {/* approch 2  */}
            {/* <button onClick={() => this.clickHandler()}>click to change message</button> */}

            <button onClick={this.clickHandler}>Click to change message</button> {/*recommended */}
            <button onClick={this.clickHandlerNew}>Click to change to exit</button> {/*recommended */}
            
        </div>
      )
  }
}

export default EventBind