import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleCick =()=>{
    setCount(prev => prev+3);
  }
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handleCick}>click</button>
    </div>
  )
}

export default App