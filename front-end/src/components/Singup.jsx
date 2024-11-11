 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle redirects

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');  // Default to user role
  const [username, setUsername] = useState(''); // Username field
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation (this is basic, you can extend as per your needs)
    if (!email || !password || !username) {
      setError('Please enter all fields (username, email, and password).');
      return;
    }

    // Simulate authentication based on role
    if (role === 'user') {
      navigate('/user');
    } else if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'doctor') {
      navigate('/doctorprofile');
    } else {
      setError('Invalid role selected.');
    }
  };

  return (
    <div style={styles.container}>
      

      <div style={styles.loginBox}>
        <h2 style={styles.loginHeading}>Signup</h2>

        {error && <div style={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="role" style={styles.label}>Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>Signup</button>
        </form>
      </div>

      
    </div>
  );
};

// Inline styles in JavaScript object format
const styles = {
  container: {
    fontFamily: "'Calendas Plus', serif",
    backgroundColor: '#F8BBD0',  // Light pink background to match your homepage
    color: '#AF1740',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',  // Slightly reduced height to keep the page compact
  },
  header: {
    background: '#C2185B',
    color: '#fff',
    padding: '5px 0', // Reduced padding for a more compact header
    textAlign: 'center',
    width: '100%',
  },
  headerH3: {
    fontSize: '1.5rem',  // Smaller font size for a more compact header
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: 0,
  },
  loginBox: {
    backgroundColor: '#fff',
    padding: '15px',  // Reduced padding for a more compact login box
    width: '100%',
    maxWidth: '320px',  // Smaller width for the login box
    margin: '20px auto',
    borderRadius: '8px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  loginHeading: {
    fontSize: '20px',  // Smaller font size for the heading
    fontWeight: '600',
    color: '#C2185B',
    marginBottom: '12px',
  },
  inputGroup: {
    marginBottom: '12px',  // Reduced space between form fields
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
    color: '#C2185B',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '8px',  // Reduced padding for inputs
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    marginBottom: '8px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  select: {
    width: '100%',
    padding: '8px',  // Reduced padding for select field
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#fff',
    transition: 'border-color 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '10px',  // Slightly smaller button padding
    backgroundColor: '#C2185B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: '12px',
    marginBottom: '10px',
  },
  footer: {
    background: '#000',
    color: '#fff',
    padding: '5px 0',  // Reduced footer padding
    textAlign: 'center',
  },
  footerLinks: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',  // Reduced gap between footer links
  },
  footerLink: {
    textDecoration: 'none',
    color: 'white',
  },
};

export default Signup;
