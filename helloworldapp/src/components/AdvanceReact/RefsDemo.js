import React, { Component } from 'react'
//Paage loads it will create focus on text
export class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef= React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(thus.inputRef)
    }

    clickHandle = () =>{
        alert(this.inputRef.current.value)
    }
  render() {

    return (
      <div>
          <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandle}>Click</button>
      </div>
    )
  }
}

export default RefsDemo