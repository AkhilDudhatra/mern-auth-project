import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Function for forgot password
const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;  // Return the response data
  } catch (error) {
    throw error;  // Handle API error
  }
};

// Function for resetting password
const resetPassword = async (token, data) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, data);
    return response.data;  // Return the response data
  } catch (error) {
    throw error;  // Handle API error
  }
};

export default { forgotPassword, resetPassword };
