import React from 'react'

export default function List() {
    const animals=["buggy the clown","shanks","teach","luffy"]
    const war=["doflamigo","boa","kuma","Teach","buggy","Mihawk","croco"]
    const result=animals.map((ani,index)=><li key={index}>{index}--{ani}</li>)
    const result1=war.map((ani,index)=><li key={index}>{index}--{ani}</li>)
  return (
    <div>
      {/* <ul type="circle"> */}
      <ul type="none">
        {result , result1}
      </ul>
    </div>
  )
}

// function DisplayName(props)
// {
//     return(
//     <div>
//         <h1>
//             {props.name}
//         </h1>
//     </div>)
// }
// export default function List()
// {
//     const student=["pravi,bun,loan,lol"]
//     const stName=student.map((stu)=><DisplayName name={stu}></DisplayName>)

//     return (
//        <div>
//         {stName}
//        </div>
//     )
// }