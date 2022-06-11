import { render } from '@testing-library/react'
import React,{Component} from 'react'

export default class Counter extends Component{
    constructor(){
        super()
    
    this.state = {
        count:0
    }
}
increament(){
    this.setState({
        count:this.state.count + 1 
    },() => {
        console.log('callback statement', this.state.count)
    })
    console.log(this.state.count)
}

increamentFive(){
    this.increament5()
    this.increament5()
    this.increament5()
    this.increament5()
    this.increament5()
}
//holds the state in prev and then add
increament5(){
    //you can add props this.setState((prev,props)=> ({ props.name
    this.setState((prev)=> ({
        count:prev.count+1
    }))
    console.log(this.state.count)
}

render() {
    return (
        <div>
            <div > count - {this.state.count}</div>
            <button onClick={() => this.increament()}>Increament</button>
            <button onClick={() => this.increamentFive()}>Increament5</button>
        </div>
        )
    }
}

