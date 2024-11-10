// import React, { useState } from 'react';
// import axios from 'axios';  // You'll need to install axios via npm or yarn
// import axiosInstance from '../../axiosinterceptors';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   // Handle file selection
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);  // Store the file in state
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setMessage('Please select a file to upload');
//       return;
//     }

//     // Create a FormData object to send the file
//     const formData = new FormData();
//     formData.append('profilePic', file);  // 'profilePic' is the field name we defined in the backend

//     try {
//       // Send the file to the backend using axios
//       const response = await axiosInstance.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',  // Important for file uploads
//         },
//       });

//       setMessage(response.data.message);  // Show success message
//     } catch (error) {
//       setMessage('Error uploading file. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h3>Upload Profile Picture</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={handleFileChange}  // Set file state
//           accept="image/*"  // Allow only images
//         />
//         <button type="submit">Upload</button>
//       </form>
//       {message && <p>{message}</p>}  {/* Display message (success/error) */}
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from 'react';

const FileUpload = ({ chatId }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send file to backend
    const formData = new FormData();
    formData.append('file', file);
    formData.append('chatId', chatId);
    fetch('/api/chats/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
