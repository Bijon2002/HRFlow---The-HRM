import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apiStatus, setApiStatus] = useState('Connecting...');

  useEffect(() => {
    axios.get('/api')
      .then(res => {
        setApiStatus(res.data.message);
      })
      .catch(err => {
        console.error(err);
        setApiStatus('Failed to connect to backend server. Make sure the server is running on port 5000.');
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-section">
          <span className="logo-icon">🚀</span>
          <h1>HRFlow</h1>
        </div>
        <p className="subtitle">The Human Resource Management System</p>
      </header>

      <main className="main-content">
        <div className="card hero-card">
          <h2>Welcome to HRFlow Dashboard</h2>
          <p>Your MERN stack application is successfully configured and ready for development.</p>
          <div className={`status-badge ${apiStatus.includes('Welcome') ? 'success' : 'pending'}`}>
            Backend Status: {apiStatus}
          </div>
        </div>

        <div className="grid-layout">
          <div className="card feature-card">
            <h3>👥 Employee Directory</h3>
            <p>Manage employee profiles, roles, and personal records seamlessly.</p>
          </div>
          <div className="card feature-card">
            <h3>📅 Leave Management</h3>
            <p>Track leave requests, approvals, and employee calendars in real-time.</p>
          </div>
          <div className="card feature-card">
            <h3>💸 Payroll & Compensation</h3>
            <p>Automate salary structures, bonuses, and monthly payouts cleanly.</p>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} HRFlow HRM. Built with Vite + React + Node.js</p>
      </footer>
    </div>
  );
}

export default App;
