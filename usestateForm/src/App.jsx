import React, { useState } from 'react'

const App = () => {
  // const [first, setfirst] = useState(second)
const submitHamdler =(e)=>{
  e.preventDefault()
  console.log("Form Submitted")

}

  return (
    <div>
      <form onSubmit={(e)=>{
      submitHamdler(e)
      }}>
        <input type="text" placeholder="enter your name"  onChange={(e)=>{
          console.log(e.target.value);
          
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App