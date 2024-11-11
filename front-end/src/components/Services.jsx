// import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
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
            <h3 style={styles.serviceTitle}>Personal Chat with Experienced Doctors</h3>
            <p style={styles.serviceDescription}>
            "Connect with licensed mental health professionals for private, one-on-one chats. Whether it's stress, anxiety, or other concerns, our experts provide personalized support and guidance."
            </p>
          </div>

          {/* Service Card 2 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}> Trusted Environment</h3>
            <p style={styles.serviceDescription}>
            At MoodVillee, we ensure a safe, confidential space where you can express yourself freely, with complete respect for your privacy and well-being."
            </p>
          </div>

          {/* Service Card 3 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Experienced Doctors</h3>
            <p style={styles.serviceDescription}>
            Our team consists of highly qualified professionals with years of experience in psychology, neuroscience, and mental health.
            </p>
          </div>

          {/* Service Card 4 */}
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Personal Space for Emotions</h3>
            <p style={styles.serviceDescription}>
            We offer a safe, supportive space where you can openly share your feelings, whether in private sessions or through our community. It's a place to heal, reflect, and grow emotionally."




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
    color: '#FF80AB',
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
