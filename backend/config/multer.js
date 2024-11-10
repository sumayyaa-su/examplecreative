const multer = require('multer');
const path = require('path');

// Set the storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the folder where you want to save the uploaded files
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Set the filename as a timestamp to avoid naming conflicts
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Initialize multer with the storage engine and file validation
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Set a file size limit (5MB in this case)
  fileFilter: (req, file, cb) => {
    // Allow only certain file types (images in this case)
    const allowedTypes = /jpeg|jpg|png|gif/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
});

module.exports = upload;
