import { useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <h1>Login Form</h1>
      <Login />
      <h1>Sign Up Form</h1>
      <SignUp />
    </>
  );
}

export default App;
