import React from 'react'
import useCounter from "./hook/useCounter"

const App = () => {
  const {count, increment, decrement} = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>
    </div>
  )
}

export default App