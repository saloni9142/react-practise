import React, { useState } from 'react'

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email){
      setError("email is required")
      return;
    }
    if(!password){
      setError("password is required")
      return;
    }
    if(password.length<6){
      setError("password musr be at least 6 chracter")
      return;
    }

    // success and automic data clear
     setError("")
     setPassword("")
     setEmail("")
     console.log(email,password);
     
  }
 





  return (
    <div>
    <form onSubmit={handleSubmit} >
      {error && <p style={{color:"red"}}>{error}</p>}

     <input
type="email"
placeholder="Email"
value={email}
onChange={(e)=> setEmail(e.target.value)}


     />

     
     <input
type="password"
placeholder="password"
value={password}
onChange={(e)=> setPassword(e.target.value)}
/>

<button type="submit">Register</button>
     
    </form>
     

    </div>
  )
}

export default App