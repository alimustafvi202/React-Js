import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />

      <h1>Enter Your Password</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />

      <h2>Entered Name: {name}</h2>
      <h2>Entered Password: {password}</h2>
    </>
  );
}

export default Login;
