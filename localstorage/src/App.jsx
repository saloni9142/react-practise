import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const user = {
      username: "saloni",
      age: 21,
      city: "bhopal"
    }

    // Setting data
    localStorage.setItem("user", JSON.stringify(user))

   const storedUser = localStorage.getItem("user");
if (storedUser) {
  const userData = JSON.parse(storedUser);
  console.log("User found:", userData);
} else {
  console.log("No user found in storage");
}
  }, []) // Empty dependency array matlab ye sirf ek baar chalega jab component load hoga

  

  return (
    <div>
      <h1>Check Console for LocalStorage Data</h1>
    </div>
  )
}

export default App