//Functional Component
import React from 'react'

function Greet() {
    return <h1>Hello Akshay</h1>
}

export default Greet

//ES 6 

export const Greet1 = (props) => { return(
    <div>
        <h1>Hello {props.name} ES6 with Hero {props.heroName}</h1>
        {props.children}
    </div>//limitation returns all in one div
    )
}
//destructuring the props
// export const Greet1 = (name,heroName) => { return(
//     <div>
//         <h1>Hello {name} ES6 with Hero {heroName}</h1>
//         {props.children}
//     </div>//limitation returns all in one div
//     )
// }