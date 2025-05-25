import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // To grab the token from URL params
import authService from '../services/authService';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();  // Grab the token from the URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      return;
    }

    try {
      const response = await authService.resetPassword(token, { password });
      if (response.success) {
        setMessage('Password reset successful!');
      } else {
        setMessage(response.message || 'Error resetting password.');
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p className="message">{message}</p>}
        <button type="submit" className="submit-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
