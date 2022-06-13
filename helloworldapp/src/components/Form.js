import React, { Component } from 'react'
//control components form element
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:''
        }
    }
    userNameChange = (event) => {
        this.setState ({
            username: event.target.value
        })

    }

    commentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    topicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit= event =>{
        alert(`${this.state.username}`)
        //page refresshes 
        //to prevent refresh
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
            <lable>Username</lable>
            <input type='text' value={this.state.username} onChange={this.userNameChange} />
            </div>
            <div>
                <label>comments:</label>
                <textarea value={this.state.comments} onChange={this.commentsChange}/>
            </div>
            <div>
                <label>topic</label>
                <select value={this.state.topic} onChange = {this.topicChange}>
                <option value='react'>react</option>
                <option value='vue>'>vue</option>
                </select>
            </div>
            <button type='submit' >submit</button>
        </form>
    )
  }
}

export default Form