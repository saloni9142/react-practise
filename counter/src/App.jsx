

import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick =()=>{
    setCount(prev=> prev+1)
     }

     const decrease =() =>{
     
      if(count>0){
         setCount(prev=> prev-1)

      }
     }

 const reset =()=>{
  setCount(0);
 }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>increase </button>
        <button onClick={decrease}>decrease </button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default App