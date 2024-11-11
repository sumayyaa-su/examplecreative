// import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.aboutLeft}>
          <h1 style={styles.aboutTitle}>Welcome to MoodVillee</h1>
          <p style={styles.introText}>
            At MoodVillee, we are dedicated to making psychology and neuroscience accessible to everyone. Our mission is to simplify complex topics and help you understand the science behind human behavior.
          </p>
        </div>

        {/* Card Layout for Sections */}
        <div style={styles.aboutRight}>
          <div style={styles.aboutSectionCard}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.sectionText}>
              At MoodVillee, we are passionate about democratizing knowledge and making it available to everyone. Our mission is to provide accurate, evidence-based information to help people understand their minds better.
            </p>
          </div>

          <div style={styles.aboutSectionCard}>
            <h2 style={styles.sectionTitle}>Our Vision</h2>
            <p style={styles.sectionText}>
              We aim to create a world where everyone has access to valuable insights into the human brain, and to empower individuals to improve their mental health and emotional well-being.
            </p>
          </div>

          <div style={styles.aboutSectionCard}>
            <h2 style={styles.sectionTitle}>Who We Are</h2>
            <p style={styles.sectionText}>
              MoodVillee was founded in 2022 by a team of neuroscience and psychology professionals, united by a passion for understanding the mind and helping others unlock their potential.
            </p>
          </div>

          <div style={styles.aboutSectionCard}>
            <h2 style={styles.sectionTitle}>What We Do</h2>
            <ul style={styles.featureList}>
              <li>Provide evidence-based, research-driven content.</li>
              <li>Break down complex psychological concepts into digestible information.</li>
              <li>Create a platform where curious minds can learn and engage.</li>
            </ul>
          </div>

          <div style={styles.aboutSectionCard}>
            <h2 style={styles.sectionTitle}>Our Values</h2>
            <ul style={styles.valueList}>
              <li><strong>Accuracy:</strong> Providing scientifically accurate, well-researched content.</li>
              <li><strong>Accessibility:</strong> Making knowledge easy to understand for everyone.</li>
              <li><strong>Inclusivity:</strong> Embracing diverse perspectives in our content and community.</li>
              <li><strong>Curiosity:</strong> Encouraging ongoing learning and exploration.</li>
              <li><strong>Integrity:</strong> Ensuring editorial independence and transparency.</li>
            </ul>
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
    background: '#FFFFFF',
  },
  aboutLeft: {
    marginBottom: '40px',
  },
  aboutTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF80AB',
  },
  introText: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
  },
  aboutRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  aboutSectionCard: {
    backgroundColor: '#F48FB1',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#CC2B52',
    marginBottom: '10px',
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#333',
  },
  featureList: {
    listStyle: 'none',
    paddingLeft: '20px',
  },
  valueList: {
    listStyle: 'none',
    paddingLeft: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default AboutUs;
