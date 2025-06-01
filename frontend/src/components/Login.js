// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Importing the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulating login logic, replace with actual backend call
      if (email === "test@test.com" && password === "password123") {
        localStorage.setItem('token', 'fake-token');
        navigate('/dashboard');
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Holla, Welcome Back</h1>
        <p>Hey, welcome back to your special place</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        <div className="additional-links">
          <a href="#">Forgot Password?</a>
          <p>Don't have an account? <a href="/register">Sign Up</a></p>
        </div>
      </div>
      <div className="login-right">
        <img src="https://via.placeholder.com/400x400.png" alt="Login Illustration" />
      </div>
    </div>
  );
}

export default Login;
