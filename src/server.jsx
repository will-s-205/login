// require('dotenv').config();
const { log } = require('console');
const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 5000;

// Define a sample API endpoint
app.get('/api/data', (req, res) => {
  // Perform Mongoose queries or operations here
  // Return data as JSON
  res.json({ message: 'API endpoint is working' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console,log(process.env.REACT_APP_MONGO_URI);
});