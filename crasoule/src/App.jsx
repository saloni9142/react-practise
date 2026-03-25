import React, { useState } from 'react'
 import { useEffect } from "react";

const App = () => {
  const images=[
     "https://picsum.photos/id/101/400/200",
    "https://picsum.photos/id/102/400/200",
    "https://picsum.photos/id/103/400/200"
  ]


  const[index ,setIndex] = useState(0);
  const nextSlide= () =>{
    setIndex((prev) => (prev +1) % images.length)
  }
  const prevSlide =() =>{
    setIndex((prev)=>{
   return   prev===0 ? images.length-1 : prev-1;
    })
  }

 

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev =>(prev+1)%images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <img src={images[index]} alt="slide" />
       {images.map((_, i) => (
    <span
      key={i}
      onClick={() => setIndex(i)}
      style={{
        color: i === index ? "red" : "gray",
        cursor: "pointer",
        fontSize: "20px",
        margin: "5px"
      }}
    >
      ●
    </span>
  ))}

      <div>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
    </div>
  )
}

export default App