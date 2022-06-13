import React from 'react'

function ListPattern() {
    const names = ['ak', 'bk' , 'ck']
    const names2 = ['ak', 'bk' , 'ck', 'ak']
  return (
    <div>
            {names[0]}
            {
            names.map(name =>  <h3 key ={name}>{name}</h3>)//require key
                //names2.map((name,index) =>  <h3 key ={index}> {name}</h3>)//require key
            }
            {
                names2.map((name,index) =>  <h3 key ={index}> {name}</h3>)//require key
            }
    </div>
  )
}

export default ListPattern