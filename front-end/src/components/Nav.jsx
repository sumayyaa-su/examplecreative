// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    
    <nav style={{ backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Home
        </Link>
        <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Login
        </Link>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Signup
        </Link>
        <Link to="/doctorprofile" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Doctor Profile
        </Link>
        <Link to="/user" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          User Profile
        </Link>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>
          Admin 
        </Link>
        
        
          <Link to="/chat" style={{ color: 'white', textDecoration: 'none',marginRight: '20px' }}>
            Chat
          </Link>
        
      </div>
    </nav>
  );
};

export default Nav;
