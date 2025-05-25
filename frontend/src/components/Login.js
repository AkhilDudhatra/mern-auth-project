import React, { useState } from 'react';
import './Login.css';  // Import the custom styles

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username} - Password: ${password}`);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <div className="avatar">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png" 
            alt="User Avatar" 
          />
          <span className="online-indicator"></span>
        </div>
        <h2>Sign in here</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="links">
          <a href="/forgot-password">Forget Password</a>
          <a href="/signup">Sign-Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
