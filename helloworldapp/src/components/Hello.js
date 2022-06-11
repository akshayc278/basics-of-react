import React from 'react'
//js syntax
export const Hello = () => <h1>Hello Js Akshay</h1>
//jxs systax
export const Hello1 = () => {
    return React.createElement('div',
    {id:'hello1' , className:'dummyclass'},
    React.createElement('h1',null,'Hello1 akshay jxs syntax  '))
}