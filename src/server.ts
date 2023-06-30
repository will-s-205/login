const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Connect to MongoDB using Mongoose
const mongodb = mongoose.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors())

// Define a sample API endpoint
app.get('/api/data', (req, res) => {
  // Perform Mongoose queries or operations here
  // Return data as JSON
  res.json({ message: 'API endpoint is working' });
});

// Start the server
app.listen(process.env.MONGODB, () => {
  console.log(`Server is running on port ${process.env.MONGODB}`);
});

exports.module = mongodb;
