import React, { useState } from 'react'

const App = () => {

  const [on, setOn] = useState(false)
  const handleClick=()=>{
    setOn(if(!on? true: false))
  }

  return (
    <div>
      

    </div>
  )
}

export default App