
const mongoose = require('mongoose');
require('dotenv').config();

// Ensure the MONGODB_URL environment variable is defined
const mongoDB_URL = process.env.MONGODB_URL;

if (!mongoDB_URL) {
  console.error("MongoDB URI is missing in the environment variables.");
  process.exit(1); // Exit if URI is missing
}

// Enable mongoose debugging for logging all operations
mongoose.set('debug', true);

// Disable command buffering (ensuring commands aren't buffered while waiting for a connection)
// mongoose.set('bufferCommands', false);

// Try connecting to MongoDB using the connection string
mongoose.connect(mongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  serverSelectionTimeoutMS: 1000 ,// Timeout for server selection (can help with debugging connection issues)
  socketTimeoutMS: 45000, // Timeout after 45 seconds if no response from the server
  family: 4, 
})
  .then(() => {
    console.log('Connection to MongoDB established successfully.');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);  // Exit the process if there's a connection error
  });

// Mongoose event listeners to log connection status changes
mongoose.connection.on('connected', () => {
  console.log('Mongoose successfully connected to MongoDB.');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected.');
});

// Optionally handle process exit to clean up connection before exiting
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to application termination');
  process.exit(1);  // Gracefully exit the application
});
