import React from 'react'

export default function TryCatch({fruit}) {
    try{
        if(fruit==="onion")
        throw new Error("i am not a fruit")
        document.write("hellooooooooooooooo")

    }
    catch(error)
    {
      console.log("not a fruit")
      document.writeln("hello")


    }
    finally
    {
        document.write("good")
    }
  return (
    <div>
      
    </div>
  )
}
