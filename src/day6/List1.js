import React from 'react'

export default function List1() {
  
    
      const college=[{id:1,stuname:"bhuvi",age:26},
      {id:2,stuname:"bhuvanesh",age:3000},
      {id:3,stuname:"bhuvanesh ennum watchu",age:99}
                        ]
    const result1=college.map((col)=><li key={col.id}>{col.stuname}  {col.age}</li>)                 
    return(
        <div style ={{background:"Red"}}> 
           {result1}
    </div>
  )
}
