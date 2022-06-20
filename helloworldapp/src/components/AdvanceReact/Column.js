import React from 'react'

function Column() {
    const items = []
  return (

    <React.Fragment>
        {
            items.map( item =>(
                <React.Fragment key = {item.id}>
                    <h1>title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Akshay Chavan</td>
    </React.Fragment>
    //u can use just <> </> ..equals <React.fragment></React.fragment> but you cannot pass key element
    //   //this will give console error
    // <div>
    //     <td>
    //         Name
    //     </td>
    //     <td>
    //         Akshay Table raw
    //     </td>
    // </div>
  )
}

export default Column