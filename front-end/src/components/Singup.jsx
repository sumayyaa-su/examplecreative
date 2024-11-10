import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle redirects

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');  // Default to user role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation (this is basic, you can extend as per your needs)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulate authentication based on role
    if (role === 'user') {
      // Simulate successful login for a user
      navigate('/user-dashboard');  // Redirect to user dashboard
    } else if (role === 'admin') {
      // Simulate successful login for an admin
      navigate('/admin-dashboard');  // Redirect to admin dashboard
    } else if (role === 'doctor') {
      // Simulate successful login for a doctor
      navigate('/doctor-dashboard');  // Redirect to doctor dashboard
    } else {
      setError('Invalid role selected.');
    }
  };

  return (
    <div style={styles.loginContainer}>
      <h2>singup</h2>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
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
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={styles.textCenter}>
        Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
      </p>
    </div>
  );
};

// Inline styles in JavaScript object format
const styles = {
  loginContainer: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0088cc',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '20px',
  },
  link: {
    color: '#00aaff',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default Login;
