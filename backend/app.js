
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Multer configuration (assuming multer.js is inside the config folder)
const upload = require('./config/multer');

// Import the authMiddleware and chatRouter
const authMiddleware = require('./middleware/auth');
const chatRoutes = require('./routes/chatRoutes');
mongoose.set('strictQuery', false);

// Use environment variables for configuration (e.g., MongoDB URI, port)
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;  // Get MongoDB URI from .env file

// Middleware setup
app.use(morgan('dev'));  // HTTP request logger middleware
app.use(cors());         // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Built-in Express middleware for parsing JSON requests
app.use(express.urlencoded({ extended: true })); // Built-in middleware for parsing URL-encoded data

// Serve the uploaded files (make sure this is before the routes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Check if uploads folder exists, if not, create it
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Ensure the uploads directory exists
}

// MongoDB connection (using the environment variable for the URI)
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Routes
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const doctorRotes = require('./routes/doctorRotes'); // Fixed typo

// Apply routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/doctor', doctorRotes);

// Chat routes with authentication middleware (protected)
app.use('/chat', authMiddleware, chatRoutes);

// Admin login route (Mock for demonstration)
app.post('/login', (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  if (adminEmail === 'admin1122@gmail.com' && adminPassword === '112233') {
    res.json({
      message: 'Login successful',
      role: 'admin',
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Image upload route (with error handling for missing file)
app.post('/upload', upload.single('profileImage'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    console.log('File uploaded successfully:', req.file);
    // Send back the file path to the frontend
    res.json({
      message: 'File uploaded successfully!',
      filePath: `/uploads/${req.file.filename}`, // Corrected template literal syntax
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Error uploading file', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
