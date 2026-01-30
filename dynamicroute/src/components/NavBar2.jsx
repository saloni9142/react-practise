import React from "react";
import { useNavigate } from "react-router-dom";
 
 
 const NavBar2 = () => {

    let navigate = useNavigate()
   return (
     <div>
        <button onClick={()=>{
            navigate('/')
        }}> return to page</button>

        <button onClick={()=>{
            navigate(-1)
        }}>back</button>
     </div>
   )
 }
 
 export default NavBar2