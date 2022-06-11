////StateFull Component
import React,{Component} from 'react'

// export default class Welcome extends Component{
//     render =() => <h1>Hi StateFull class </h1>
// }

export default class Welcome extends Component{
    render =() => {
        return    <h1>Hi StateFull class hi {this.props.name}</h1>
    }
}

