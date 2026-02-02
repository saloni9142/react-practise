import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment } from '../redux/slices/CounterSlice';
const Counter = () => {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
      
        <br/>
  <br/>


  <div>{count}</div>

        <button onClick={()=>dispatch(increment())}>decrement</button>
    </div>
  )
}

export default Counter