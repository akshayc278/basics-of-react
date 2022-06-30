//Functional component
//what PureComponent to class Memo is for funcional components 
import React from 'react'

function MemoComponent({name}) {
    console.log('rendering memo')
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComponent)