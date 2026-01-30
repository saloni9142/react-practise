import React, { useState } from 'react'

const App = () => {

  const [on, setOn] = useState(false)
  const handleClick=()=>{
    setOn(prev=>!prev)

  }

  return (
    <div>
      <button onClick={handleClick}>
        {on ? "ON":"OFF"}
      </button>

    </div>
  )
}

export default App