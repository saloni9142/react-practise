import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

function inputIncrease(){
  setNum(num +1);
  // console.log(num);
  
}
function inputDecreses(){
  setNum(num-1);
}

  return (
    <div>
      <h1>{num}</h1>
    <button onClick={inputIncrease}>increae by 1</button>
     <button onClick={inputDecreses}>decreae by 1</button>


    </div>
  )
}

export default App