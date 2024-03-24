import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<username>();
  const [password, setPassword] = useState<password>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Username:</label>
        <input name="firstName" onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="lastName">Password:</label>
        <input name="lastName" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
