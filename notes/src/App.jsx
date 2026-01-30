import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("")
  const [details,setDetails] = useState("")
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(title,details);
    setTitle("")
    setDetails("")

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
         <textarea type="text" placeholder='write details'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
         />
     
      <button>Note me</button>
       </form>
    </div>
  )
}

export default App