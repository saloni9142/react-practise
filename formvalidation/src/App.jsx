// import React, { useState } from "react";

// function App() {

//   const [isLogin, setIsLogin] = useState(true);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleRegister = () => {
//     localStorage.setItem("user", JSON.stringify(form));
//     alert("Registration successful");
//     setIsLogin(true);
//   };

//   const handleLogin = () => {

//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (
//       savedUser &&
//       savedUser.email === form.email &&
//       savedUser.password === form.password
//     ) {
//       alert("Login successful");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{textAlign:"center", marginTop:"50px"}}>

//       <h2>{isLogin ? "Login" : "Register"}</h2>

//       {!isLogin && (
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />
//       )}

//       <br/><br/>

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//       />

//       <br/><br/>

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//       />

//       <br/><br/>

//       {isLogin ? (
//         <button onClick={handleLogin}>Login</button>
//       ) : (
//         <button onClick={handleRegister}>Register</button>
//       )}

//       <br/><br/>

//       <button onClick={() => setIsLogin(!isLogin)}>
//         {isLogin ? "Go to Register" : "Go to Login"}
//       </button>

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful");
    setIsLogin(true);
  };

  const handleLogin = () => {

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      )}

      <br/><br/>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br/><br/>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br/><br/>

      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleRegister}>Register</button>
      )}

      <br/><br/>

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Register" : "Go to Login"}
      </button>

    </div>
  );
}

export default App;