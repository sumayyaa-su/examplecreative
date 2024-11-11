// import React, { useState } from 'react';
// import { Form, Button, Card } from 'react-bootstrap';
// import { FaPaperPlane, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'; // Social media icons
// import '../Contact.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check for form validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus({ type: 'error', message: 'Please fill in all fields' });
//       return;
//     }

//     try {
//       // For now, just log the data to the console
//       console.log('Form Submitted:', formData);
//       setStatus({ type: 'success', message: 'Thank you for contacting us!' });
//       setFormData({ name: '', email: '', message: '' }); // Reset the form
//     } catch (error) {
//       console.error(error);
//       setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header Section */}
//       <header style={styles.header}>
//         <div style={styles.logo}>
//           {/* Correct path to logo */}
//           <img src="/Copy of Black and White Circle Business Logo.png" alt="Logo" style={styles.logoImage} />
//           <h1>MoodVillee</h1>
//         </div>
//         <nav>
//           <ul style={styles.nav}>
//             <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
//             <li style={styles.navItem}><a href="/Aboutus" style={styles.navLink}>About us</a></li>
//             <li style={styles.navItem}><a href="/services" style={styles.navLink}>Services</a></li>
//             <li style={styles.navItem}><a href="/Contactus" style={styles.navLink}>Contact us</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main style={styles.mainContent}>
//         <div style={styles.contactHeader}>
//           <h2 style={styles.pageTitle}>Contact Us</h2>
//           <p style={styles.pageDescription}>
//             We would love to hear from you. Whether you have a question or feedback, feel free to reach out.
//           </p>
//         </div>

//         {/* Contact Form */}
//         <div style={styles.contactForm}>
//           <form onSubmit={handleSubmit}>
//             <div style={styles.formGroup}>
//               <label htmlFor="name" style={styles.label}>Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label htmlFor="email" style={styles.label}>Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               />
//             </div>

//             <div style={styles.formGroup}>
//               <label htmlFor="message" style={styles.label}>Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Write your message here"
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={styles.textarea}
//                 required
//               />
//             </div>

//             <Button type="submit" style={styles.submitButton}>
//               <FaPaperPlane /> Send Message
//             </Button>
//           </form>

//           {status && (
//             <div style={styles.statusMessage} className={status.type === 'success' ? 'success' : 'error'}>
//               {status.message}
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Social Media Card */}
//       <Card className="social-media-card mt-4 shadow-sm">
//         <Card.Body className="text-center">
//           <h5>Follow Us</h5>
//           <div className="social-icons mt-3">
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
//               <FaTwitter size={30} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
//               <FaInstagram size={30} />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
//               <FaFacebookF size={30} />
//             </a>
//             <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
//               <FaEnvelope size={30} />
//             </a>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Footer Section */}
//       <footer style={styles.footer}>
//         <p>&copy; 2024 MoodVillee. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: 'Arial, sans-serif',
//     color: '#333',
//     margin: 0,
//     padding: 0,
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '20px',
//     background: '#C2185B',
//     color: '#F5B7B1',
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: '1.5rem',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logoImage: {
//     width: '40px',
//     height: '40px',
//     marginRight: '10px',
//   },
//   nav: {
//     display: 'flex',
//     gap: '20px',
//     listStyle: 'none',
//   },
//   navItem: {},
//   navLink: {
//     textDecoration: 'none',
//     color: 'white',
//     fontSize: '1rem',
//   },
//   mainContent: {
//     padding: '50px 20px',
//     background: '#f8f8f8',
//   },
//   contactHeader: {
//     textAlign: 'center',
//     marginBottom: '40px',
//   },
//   pageTitle: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   pageDescription: {
//     fontSize: '1.2rem',
//     color: '#555',
//   },
//   contactForm: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     fontSize: '1rem',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '1rem',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     marginTop: '5px',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '1rem',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     height: '150px',
//     marginTop: '5px',
//   },
//   submitButton: {
//     width: '100%',
//     padding: '12px',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     background: '#CC2B52',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   statusMessage: {
//     marginTop: '20px',
//     padding: '10px',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   footer: {
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: '20px',
//     textAlign: 'center',
//   },
// };

// export default ContactUs;
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaPaperPlane, FaTwitter, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'; // Social media icons
import '../Contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      return;
    }

    try {
      // For now, just log the data to the console
      console.log('Form Submitted:', formData);
      setStatus({ type: 'success', message: 'Thank you for contacting us!' });
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contactHeader}>
          <h2 style={styles.pageTitle}>Contact Us</h2>
          <p style={styles.pageDescription}>
            We would love to hear from you. Whether you have a question or feedback, feel free to reach out.
          </p>
        </div>

        {/* Contact Form */}
        <div style={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>

            <Button type="submit" style={styles.submitButton}>
              <FaPaperPlane /> Send Message
            </Button>
          </form>

          {status && (
            <div style={styles.statusMessage} className={status.type === 'success' ? 'success' : 'error'}>
              {status.message}
            </div>
          )}
        </div>
      </main>

      {/* Social Media Card */}
      <Card className="social-media-card mt-4 shadow-sm">
        <Card.Body className="text-center">
          <h5>Follow Us</h5>
          <div className="social-icons mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaInstagram size={30} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaFacebookF size={30} />
            </a>
            <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaEnvelope size={30} />
            </a>
          </div>
        </Card.Body>
      </Card>

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
  contactHeader: {
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
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '150px',
    marginTop: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    background: '#CC2B52',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  statusMessage: {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default ContactUs;
