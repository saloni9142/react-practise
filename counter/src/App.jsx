

import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const MAX_LIMIT=10;

  useEffect(() => {
  document.title = `Current Count: ${count}`;
}, [count]); // Jab bhi 'count' badlega, ye tab title update karega.
  const handleClick =()=>{
    if(count<MAX_LIMIT){
    setCount(prev=> prev+1)
     }
    }

     const decrease =() =>{
     
      if(count>0){
         setCount(prev=> prev-1)

      }
     }

 const reset =()=>{
  setCount(0);
 }

  


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick} disabled={count===MAX_LIMIT}>increase </button>
        <button onClick={decrease}>decrease </button>
        <button onClick={reset}>reset</button>
        {count === MAX_LIMIT && <p style={{ color: 'red' }}>Max limit reached!</p>}
    </div>
  )
}

export default App



// const [count, setCount] = useState(() => {
//     const savedCount = localStorage.getItem("myCount");
//     return savedCount ? JSON.parse(savedCount) : 0;
//   });

//   // 2. useEffect: Jab bhi 'count' change ho, use storage mein save kar do
//   useEffect(() => {
//     localStorage.setItem("myCount", JSON.stringify(count));
//     console.log("Saving to Storage:", count);
//   }, [count]); // 'count' dependency hai yahan