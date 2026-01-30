import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return ( 
    <div>
      <div>
        <Link to='/contact/men'>Men c</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Contact