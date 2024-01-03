import React, {useEffect,useState} from 'react'
import axios from 'axios';
export default function GetAxios() {
  return (
    const[name,setName]=useState([]);
useEffect(()=>{
    axios.get(`http://localhost:3001/posts`)
    .then((res))=>{
        const store=res.data;
        setName(store)
    }


})
    <div>
      <h1>Axios</h1>
      {name}
    </div>
  )
}
