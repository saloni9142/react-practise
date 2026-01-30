import React from 'react'

const App = () => {
  // localStorage.setItem("user", "saloni")
  // localStorage.setItem("age", 18)
  // const user = localStorage.getItem("user")
// const age = localStorage.getItem("age")

//   console.log(age);

const user ={
  username: "saloni",
  age: "city",
  city: "bhopal"
}
localStorage.setItem("user" ,JSON.stringify(user))
const usera = JSON.parse(localStorage.getItem("user"))
  
  return (
    <div>App</div>
  )
}

export default App