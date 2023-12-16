import React ,{useState}from 'react'

export default function Twoway() {
    const[name,setname]=useState("")
    const changeName=(event)=>setname(event.target.value)
  return (
    <div>
     <input onChange={changeName} value={name}></input>
     <p>the name is{name}</p> 
    </div>
  )
}
