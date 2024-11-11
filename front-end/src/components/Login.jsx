//  import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // To handle redirects

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');  // Default to user role
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation (this is basic, you can extend as per your needs)
//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     // Simulate authentication based on role
//     if (role === 'user') {
//       navigate('/user');  // Redirect to user dashboard
//     } else if (role === 'admin') {
//       navigate('/admin');  // Redirect to admin dashboard
//     } else if (role === 'doctor') {
//       navigate('/doctorprofile');  // Redirect to doctor dashboard
//     } else {
//       setError('Invalid role selected.');
//     }
//   };

//   return (
//     <div style={styles.loginContainer}>
//       <h2 style={styles.heading}>Login</h2>

//       {error && <div style={styles.errorMessage}>{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="role" style={styles.label}>Role</label>
//           <select
//             id="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             style={styles.select}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//             <option value="doctor">Doctor</option>
//           </select>
//         </div>

//         <button type="submit" style={styles.button}>Login</button>
//       </form>

//       <p style={styles.textCenter}>
//         Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
//       </p>
//     </div>
//   );
// };

// // Inline styles in JavaScript object format
// const styles = {
//   loginContainer: {
//     width: '100%',
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '40px',
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   heading: {
//     color: '#e91e63',  // Stronger pink color for the heading
//     fontSize: '28px',
//     fontWeight: '600',
//     marginBottom: '24px',
//   },
//   inputGroup: {
//     marginBottom: '18px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '8px',
//     fontWeight: 'bold',
//     color: '#e91e63',  // Soft pink color for labels
//   },
//   input: {
//     width: '100%',
//     padding: '14px',
//     fontSize: '16px',
//     border: '2px solid #f1f1f1',
//     borderRadius: '10px',
//     marginBottom: '10px',
//     transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//   },
//   inputFocus: {
//     borderColor: '#e91e63',
//     boxShadow: '0 0 5px rgba(233, 30, 99, 0.3)',
//   },
//   select: {
//     width: '100%',
//     padding: '14px',
//     fontSize: '16px',
//     border: '2px solid #f1f1f1',
//     borderRadius: '10px',
//     backgroundColor: '#fff',
//     transition: 'border-color 0.3s ease',
//   },
//   button: {
//     width: '100%',
//     padding: '14px',
//     backgroundColor: '#e91e63',  // Strong pink color for the button
//     color: 'white',
//     border: 'none',
//     borderRadius: '10px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease, transform 0.2s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#d81b60',  // Slightly darker pink on hover
//     transform: 'scale(1.05)',  // Button grows a bit on hover
//   },
//   textCenter: {
//     textAlign: 'center',
//     marginTop: '24px',
//     color: '#777',
//   },
//   link: {
//     color: '#e91e63',  // Pink color for the link
//     textDecoration: 'none',
//     fontWeight: 'bold',
//   },
//   linkHover: {
//     textDecoration: 'underline',
//   },
//   errorMessage: {
//     color: '#e74c3c', // Red color for error messages
//     marginBottom: '12px',
//     fontSize: '14px',
//   },
// };

// // Adding focus effect to input fields and button hover effect
// const enhancedStyles = {
//   ...styles,
//   input: {
//     ...styles.input,
//     '&:focus': styles.inputFocus,
//   },
//   button: {
//     ...styles.button,
//     '&:hover': styles.buttonHover,
//   },
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // To handle redirects

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');  // Default to user role
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation (this is basic, you can extend as per your needs)
//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     // Simulate authentication based on role
//     if (role === 'user') {
//       navigate('/user');  // Redirect to user dashboard
//     } else if (role === 'admin') {
//       navigate('/admin');  // Redirect to admin dashboard
//     } else if (role === 'doctor') {
//       navigate('/doctorprofile');  // Redirect to doctor dashboard
//     } else {
//       setError('Invalid role selected.');
//     }
//   };

//   return (
//     <div style={styles.loginContainer}>
//       <h2 style={styles.heading}>Login</h2>

//       {error && <div style={styles.errorMessage}>{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//             style={styles.input}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="role" style={styles.label}>Role</label>
//           <select
//             id="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             style={styles.select}
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//             <option value="doctor">Doctor</option>
//           </select>
//         </div>

//         <button type="submit" style={styles.button}>Login</button>
//       </form>

//       <p style={styles.textCenter}>
//         Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
//       </p>
//     </div>
//   );
// };

// // Inline styles in JavaScript object format
// const styles = {
//   loginContainer: {
//     width: '100%',
//     maxWidth: '350px', // Smaller width for a more compact login box
//     margin: '0 auto',
//     padding: '30px',
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     transition: 'all 0.3s ease-in-out',
//   },
//   heading: {
//     color: '#f28ab2',  // Lighter pink for the heading
//     fontSize: '26px',
//     fontWeight: '600',
//     marginBottom: '20px',
//   },
//   inputGroup: {
//     marginBottom: '18px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '6px',
//     fontWeight: '500',
//     color: '#f28ab2',  // Lighter pink for labels
//   },
//   input: {
//     width: '100%',
//     padding: '12px',
//     fontSize: '16px',
//     border: '1px solid #f1f1f1',
//     borderRadius: '8px',
//     marginBottom: '10px',
//     transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//   },
//   inputFocus: {
//     borderColor: '#f28ab2', // Soft pink color on focus
//     boxShadow: '0 0 5px rgba(242, 138, 178, 0.4)',
//   },
//   select: {
//     width: '100%',
//     padding: '12px',
//     fontSize: '16px',
//     border: '1px solid #f1f1f1',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     transition: 'border-color 0.3s ease',
//   },
//   button: {
//     width: '100%',
//     padding: '14px',
//     backgroundColor: '#f28ab2',  // Light pink for the button
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease, transform 0.2s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#e16c99',  // Slightly darker pink on hover
//     transform: 'scale(1.05)',  // Button grows a bit on hover
//   },
//   textCenter: {
//     textAlign: 'center',
//     marginTop: '18px',
//     color: '#777',
//   },
//   link: {
//     color: '#f28ab2',  // Light pink color for the link
//     textDecoration: 'none',
//     fontWeight: '500',
//   },
//   linkHover: {
//     textDecoration: 'underline',
//   },
//   errorMessage: {
//     color: '#e74c3c', // Red color for error messages
//     marginBottom: '12px',
//     fontSize: '14px',
//   },
// };

// // Adding focus effect to input fields and button hover effect
// const enhancedStyles = {
//   ...styles,
//   input: {
//     ...styles.input,
//     '&:focus': styles.inputFocus,
//   },
//   button: {
//     ...styles.button,
//     '&:hover': styles.buttonHover,
//   },
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // To handle redirects

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');  // Default to user role
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation (this is basic, you can extend as per your needs)
//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     // Simulate authentication based on role
//     if (role === 'user') {
//       navigate('/user');  // Redirect to user dashboard
//     } else if (role === 'admin') {
//       navigate('/admin');  // Redirect to admin dashboard
//     } else if (role === 'doctor') {
//       navigate('/doctorprofile');  // Redirect to doctor dashboard
//     } else {
//       setError('Invalid role selected.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <div style={styles.logo}>
         
//         </div>
//       </header>

//       <div style={styles.loginBox}>
//         <h2 style={styles.loginHeading}>Login</h2>
        
//         {error && <div style={styles.errorMessage}>{error}</div>}
        
//         <form onSubmit={handleSubmit}>
//           <div style={styles.inputGroup}>
//             <label htmlFor="email" style={styles.label}>Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label htmlFor="password" style={styles.label}>Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label htmlFor="role" style={styles.label}>Role</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               style={styles.select}
//             >
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//               <option value="doctor">Doctor</option>
//             </select>
//           </div>

//           <button type="submit" style={styles.button}>Login</button>
//         </form>

//         <p style={styles.textCenter}>
//           Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
//         </p>
//       </div>

//       <footer style={styles.footer}>
//         <p>&copy; 2024 MoodVillee. All rights reserved.</p>
//         <ul style={styles.footerLinks}>
//           <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
//           <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
//         </ul>
//       </footer>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     fontFamily: "'Calendas Plus', serif",
//     backgroundColor: '#F8BBD0',  // Light pink background to match your homepage
//     color: '#AF1740',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     minHeight: '80vh', // Decreased height for a more compact look
//   },
//   header: {
//     background: '#C2185B',
//     color: '#fff',
//     padding: '10px 0', // Reduced padding for header
//     textAlign: 'center',
//   },
//   logo: {
//     marginBottom: '10px',
//   },
//   headerH3: {
//     fontSize: '2rem',  // Smaller font size for a more compact header
//     fontWeight: '700',
//     color: '#fff',
//     letterSpacing: '2px',
//     textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
//     textTransform: 'uppercase',
//     margin: 0,
//   },
//   headerH4: {
//     fontSize: '1.3rem',  // Smaller font size for a more compact header
//     fontWeight: '400',
//     color: '#F5B7B1',
//     letterSpacing: '1.5px',
//     textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)',
//     marginTop: '10px',
//   },
//   loginBox: {
//     backgroundColor: '#fff',
//     padding: '20px',  // Reduced padding for a more compact login box
//     width: '100%',
//     maxWidth: '350px',
//     margin: '0 auto',
//     borderRadius: '10px',
//     boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   loginHeading: {
//     fontSize: '24px',  // Slightly smaller heading
//     fontWeight: '600',
//     color: '#C2185B',
//     marginBottom: '15px', // Reduced margin
//   },
//   inputGroup: {
//     marginBottom: '15px',  // Reduced space between form fields
//   },
//   label: {
//     display: 'block',
//     marginBottom: '6px',
//     fontWeight: '500',
//     color: '#C2185B',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',  // Reduced padding for inputs
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     marginBottom: '10px',
//     transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
//   },
//   select: {
//     width: '100%',
//     padding: '10px',  // Reduced padding for select field
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     transition: 'border-color 0.3s ease',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',  // Slightly smaller button padding
//     backgroundColor: '#C2185B',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease, transform 0.2s ease',
//   },
//   buttonHover: {
//     backgroundColor: '#FF4081',
//   },
//   textCenter: {
//     marginTop: '15px',  // Reduced margin for text
//     color: '#777',
//   },
//   link: {
//     color: '#C2185B',
//     textDecoration: 'none',
//     fontWeight: '500',
//   },
//   footer: {
//     background: '#000',
//     color: '#fff',
//     padding: '10px',  // Reduced footer padding
//     textAlign: 'center',
//   },
//   footerLinks: {
//     listStyle: 'none',
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',  // Reduced gap between footer links
//   },
//   footerLink: {
//     textDecoration: 'none',
//     color: 'white',
//   },
//   errorMessage: {
//     color: '#e74c3c',
//     fontSize: '14px',
//     marginBottom: '12px',
//   },
// };

// export default Login;
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
      navigate('/user');  // Redirect to user dashboard
    } else if (role === 'admin') {
      navigate('/admin');  // Redirect to admin dashboard
    } else if (role === 'doctor') {
      navigate('/doctorprofile');  // Redirect to doctor dashboard
    } else {
      setError('Invalid role selected.');
    }
  };

  return (
    <div style={styles.container}>
     

      <div style={styles.loginBox}>
        <h2 style={styles.loginHeading}>Login</h2>
        
        {error && <div style={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
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

          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.textCenter}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign Up</a>
        </p>
      </div>

    
    </div>
  );
};

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
  logo: {
    marginBottom: '8px',
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
  textCenter: {
    marginTop: '12px',  // Reduced margin for text
    color: '#777',
  },
  link: {
    color: '#C2185B',
    textDecoration: 'none',
    fontWeight: '500',
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
  errorMessage: {
    color: '#e74c3c',
    fontSize: '12px',
    marginBottom: '10px',
  },
};

export default Login;
