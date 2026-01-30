import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState({user: "saloni",age:23}) 
  const onClicked =()=>{
    const num = {...first}
    num.user= "arnav"
      num.age= 29
      setfirst(num)



  }
  return (
    <div>
      <h1>{first.user}, {first.age}</h1>
      <button onClick={onClicked}>clicked me</button>
    </div>
  )
}

export default App