// PRE-REQUISITES: 
// start http://localhost:5000/; nodemon .\src\server.ts
// OR
// start http://localhost:5000/; node .\src\server.ts

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '../build')));
// app.get('/', (req, res) => {

// Connect to MongoDB using Mongoose
const connectMongoDB = () => mongoose.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// INITALL DEBUGGING
app.get('', (req, res) => {
  res.json({ message: 'API endpoint is working' });
});

app.post('/api/signup', (req, res) => {
  // res.json({status: 'success', message: 'Signup API endpoint is working'});
  console.log(req.body);
});

// Start the server
app.listen(process.env.MONGO_PORT, () => {
  console.log(`Server is running on port ${process.env.MONGO_PORT}`);
});

exports.module = connectMongoDB();
