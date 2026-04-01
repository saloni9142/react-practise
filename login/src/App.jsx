import React from 'react'
import axios from "axios";
import { useState } from 'react';


const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const handleSubmit=async(e) =>{
    e.preventDefault();
    try{
      const res= await axios.post("http://localhost:3000/users",{
        name,
        email
      });
      console.log(res.data);
      setName("");
      setEmail("");
      
    } catch(err){
      console.log("error:",err);
      
    }

  }

  return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder='enter name'
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
    <input
    type="text"
    placeholder='enter email'
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
    <button type="submit">Add user</button>
  </form>
  )
}

export default App