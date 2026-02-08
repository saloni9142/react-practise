import React, { useEffect, useState } from 'react'

const App = () => {
  const [timer,setTimer]= useState(0);
  useEffect ( () =>{
    const interval= setInterval(()=>{
      setTimer(prev => prev +1);
    },1000)
     
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h1>{timer}</h1>
    </div>
  )
}

export default App