import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [arr, setArr] = useState([])
  const[error,setError]= useState(false)
  useEffect(()=>{
    const fetchUrl = async()=>{
       try {
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        setArr(response.data);
    } catch (error) {
      setError()
      console.log(error);
      
      
    }}
  
    
fetchUrl()

  },[])
  
  return (
    <>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    
      <ul>
     { arr.map((user)=>(
        <li key={user.id}>{user.email}</li>
      )
    )
      
      }
      </ul>


    </>
  )

}

export default App