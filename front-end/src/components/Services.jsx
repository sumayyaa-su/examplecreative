import React from 'react';

const Services = () => {
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
            
            
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.servicesHeader}>
          <h2 style={styles.pageTitle}>Our Services</h2>
          <p style={styles.pageDescription}>
            At MoodVillee, we offer a range of services designed to enhance your understanding of psychology, neuroscience, and personal development. Explore our services below.
          </p>
        </div>

        <div style={styles.servicesList}>
          {/* Service Card 1 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Psychology Articles</h3>
            <p style={styles.serviceDescription}>
              We curate evidence-based, well-researched articles on various psychology topics to help you better understand human behavior and mental health.
            </p>
          </div>

          {/* Service Card 2 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Brain Science Simplified</h3>
            <p style={styles.serviceDescription}>
              We break down complex neuroscience concepts into easily digestible content so you can understand the science behind your mind.
            </p>
          </div>

          {/* Service Card 3 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Online Workshops</h3>
            <p style={styles.serviceDescription}>
              Join our interactive workshops where we explore various topics in psychology and neuroscience. Perfect for students, professionals, and curious minds.
            </p>
          </div>

          {/* Service Card 4 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Consulting Services</h3>
            <p style={styles.serviceDescription}>
              We offer consulting for individuals, schools, and organizations who want to learn more about the brain, behavior, and how to optimize mental well-being.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 MoodVillee. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    margin: 0,
    padding: 0,
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
  mainContent: {
    padding: '50px 20px',
    background: '#f8f8f8',
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  pageTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  pageDescription: {
    fontSize: '1.2rem',
    color: '#555',
  },
  servicesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  serviceTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#CC2B52',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Services;
