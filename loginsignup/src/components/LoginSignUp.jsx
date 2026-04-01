import React from 'react'
import { useState } from 'react'

const LoginSignUp = () => {
    const [action,setAction] = useState("sign up")
  return (
    <div>
        <div className='text'>{action}</div>
        <div className='inputs'>
           
            <input type="text" placeholder='name'/>

        </div>
        <div className='inputs'>
            {action==="Login"? <div></div>:  <input type="email" placeholder='email-id'/>}
            
           
            
        </div>
        <div className='inputs'>
           
            <input type="password" placeholder='password'/>
            
        </div>
        {action==="Sign up"? <div></div>:<div className='forgot-password'>Lost password <span>click here</span></div>}
          
        <div className= {action==="Login"? "submit gray":'submit'} onClick={()=>{setAction("Sign up")

        }}>Sign up</div>
         <div className={action==="Sign up" ? "submit gray" : "submit"} onClick={()=>{
            setAction("Login")
         }}>Login</div>
    </div>
  )
}

export default LoginSignUp