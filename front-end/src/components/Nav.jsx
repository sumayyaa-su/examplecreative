
import React from 'react';
import { Link } from 'react-router-dom';

// Define a simple logo (You can replace this with an actual image if you have one)
const logo = '/Copy of Black and White Business Logo.png.'; // Replace with your logo URL

const Nav = () => {
  return (
    <nav style={styles.navbar}>
      {/* Left Side: Website name and logo */}
      <div style={styles.leftSide}>
      <img src="/Logo.png" alt="Logo" style={styles.logo} />

        {/* <img src="/Copy of Black and White Business Logo.png" alt="Logo" style={styles.logo} /> */}
        <Link to="/" style={styles.websiteName}>Moodville</Link>
      </div>

      {/* Right Side: Navigation Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/aboutus" style={styles.link}>About us</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contactus" style={styles.link}>Contact us</Link>
        <Link to="/chat" style={styles.link}>Chat</Link>
      </div>
    </nav>
  );
};

// Inline styles for the navbar layout
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px', // Adjust logo size
    height: '40px',
    marginRight: '10px',
  },
  websiteName: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '16px',
  },
};

export default Nav;
