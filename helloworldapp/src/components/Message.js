import React,{Component} from 'react'

//props are immutable so we have state example given
export default class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome message'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subcribe'
        })
    }
    render =() => {
        return( 
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

