import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
   try{
    const res = await axios.post("http://localhost:8000/login", user);
    console.log(res);
   }catch(error){
    console.log(error.message)
   }
  };
  return (
    <div>
    {/* <h2>Login Form</h2>
      <form
        onSubmit={onFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "auto",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleUserData}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleUserData}
        />
        <input type="submit" value="submit" />
      </form> */}
    </div>
  );
}

export default Login;
