import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("")
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("for submitted");
    setTitle("")

  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter Notes Heading'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
         <input type="text" placeholder='write details'/>
     
      <button>Note me</button>
       </form>
    </div>
  )
}

export default App