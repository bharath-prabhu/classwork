import React from 'react'

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <Child res={1000}/>
    </div>
  )
}
function Child(Props)
{
    return (
        <div>
        <h1>i am bhuvi child</h1>
        <p>age{Props.res}</p>
        </div>
    )
}
export default Parent;