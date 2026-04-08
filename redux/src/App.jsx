
   import React from 'react'
import Counter from './components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './redux/slices/CounterSlice'
   
   const App = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
     return (
       <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch (increment())}}>increment</button>
        <button onClick={()=>{ dispatch(decrement())}}>decrement</button>
        {/* <Counter/> */}
       </div>
     )
   }
   
   export default App