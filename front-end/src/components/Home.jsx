import React, { useState } from 'react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // Add your search logic here
  };

  return (
    <div style={styles.app}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.logo}>
          {/* Correct path to logo */}
          <img src="/Copy of Black and White Circle Business Logo.png" alt="Logo" style={styles.logoImage} />
          <h1>MoodVillee</h1>
        </div>
        <nav>
          <ul style={styles.nav}>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="/Aboutus" style={styles.navLink}>Aboutus</a></li>
            <li style={styles.navItem}><a href="/services" style={styles.navLink}>Services</a></li>
            <li style={styles.navItem}><a href="/Contactus" style={styles.navLink}>Contactus</a></li>
            <li style={styles.navItem}><a href="/signin" style={styles.navLink}>Sign In</a></li>
            
          </ul>
        </nav>
      </header>

      {/* Search Bar */}
      <div style={styles.searchSection}>
        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
        </form>
      </div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Welcome to MoodVillee</h1>
          <p>Your partner in the future..for your Space..for your Emotions..! </p>
          <div style={styles.ctaButtons}>
            <button style={styles.ctaBtn}>Learn More</button>
            <button style={styles.ctaBtnPrimary}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3>Innovative Solutions</h3>
          <p>Cutting-edge technology that will revolutionize emotion interaction.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Scalable Architecture</h3>
          <p>Our system grows with you. Built to scale efficiently.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>AI-Driven Insights</h3>
          <p>Get data-driven insights with our powerful AI engine.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div>
          <p>&copy; 2024 MoodVillee. All rights reserved.</p>
          <ul style={styles.footerLinks}>
            <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    background: '#C2185B',
    color: '#F5B7B1 ',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  },
  navItem: {},
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
  // Search Bar Styles
  searchSection: {
    background: '#FFFFFF',
    padding: '20px 0',
    textAlign: 'center',
  },
  searchForm: {
    display: 'inline-flex',
    gap: '10px',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '20px',
    border: '1px solid #ccc',
    width: '300px',
  },
  searchButton: {
    padding: '10px 20px',
    background: '#C2185B',
    border: 'none',
    color: '#F8BBD0',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '20px',
    transition: 'background 0.3s ease',
  },
  searchButtonHover: {
    background: '#C7253E',
  },
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    background: '#F8BBD0',
    color: '#AF1740',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '600px',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  ctaBtn: {
    padding: '12px 24px',
    background: '#FF8A65',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  ctaBtnPrimary: {
    padding: '12px 24px',
    background: '#C2185B',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    padding: '50px',
    background: '#FFFFFF',
    textAlign: 'center',
  },
  featureCard: {
    background: '#F5B7B1',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  footer: {
    background: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  footerLinks: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  footerLink: {
    textDecoration: 'none',
    color: 'white',
  },
};

export default HomePage;


