import React, { useEffect, useState } from 'react'

const App = () => {
  const [timer,setTimer]= useState(0);
  const [isRunnning,setIsRunning] = useState()
  useEffect ( () =>{
    const interval= setInterval(()=>{
      if(!isRunnning)
        return 
      setTimer(prev => prev +1);
    },1000)
     
    return () => clearInterval(interval);  //“Interval will still run in background → causing memory leak, so we clear it in cleanup.”
  }, [isRunnning]);

  const reset= () =>{
    setTimer(0);
  }
  
  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={() => setIsRunning(!isRunnning)}>

        {/* onClick={setIsRunning(!isRunning)} ye turant run ho jiaga infinte re -render ho skat hai
         */}
        {isRunnning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App