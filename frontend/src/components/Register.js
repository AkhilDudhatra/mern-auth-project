// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';  // Import the CSS file for styling

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      // Simulate registration logic (replace with actual backend logic)
      localStorage.setItem('token', 'fake-token');
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Create an Account</h1>
        <p>Welcome! Please fill in your details to sign up.</p>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="register-btn">Sign Up</button>
        </form>
        <div className="additional-links">
          <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
      </div>
      <div className="register-right">
        <img src="https://via.placeholder.com/400x400.png" alt="Register Illustration" />
      </div>
    </div>
  );
}

export default Register;
