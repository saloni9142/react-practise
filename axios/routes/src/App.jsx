import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [arr, setArr] = useState([])
  const[error,setError]= useState("")
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const fetchUrl = async()=>{
       try {
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        
        setArr(response.data);
    } catch (err) {
      setError("failed to fech data")
      console.log(error);
      } finally{
        setLoading(false)
      }
    }
  
    
fetchUrl()

  },[])
  
  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <>
  
    
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