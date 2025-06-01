// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser(decoded);
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && <p>Welcome {user.email}</p>}
    </div>
  );
}

export default Dashboard;
