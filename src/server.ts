const express = require('express');
const app = express();
const cors = require('cors');
const mongooseDB = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const userCreds = require('./models/user.model.ts');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '../build')));
// app.get('/', (req, res) => {

// Connect to MongoDB using Mongoose
mongooseDB.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
});

// INITALL DEBUGGING
app.get('', (req, res) => {
  res.json({ message: 'API endpoint is working' });
});

app.post('/api/signup', async (req, res) => {
  console.log(req.body);
  try {
    const user = await userCreds.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      newsletter: req.body.newsletter,
    });
    res.send({ status: 'ok', message: 'User has been created' });
  } catch (error) {
    console.log(error);
    res.json({ status: 'error', message: error });
  }

  //   try {
  //     const { name, email, password, newsletter } = req.body;
  //     const user = new UserCreds({ name, email, password, newsletter });
  //     await user.save();
  //     res.json({ status: 'ok', message: 'User has been created' });
  //   }
  //   catch (err) {
  //     console.log(err);
  //     res.json({ status: 'error', message: err });
  //   }
  /////////////////////////////////////////////////////////////////////////
  //   res.json({status: 'ok', message: 'Signup API endpoint is working'});
  //   console.log(req.body);
});


// Start the server
app.listen(process.env.MONGO_PORT, () => {
  console.log(`Server is running on port ${process.env.MONGO_PORT}`);
});

// exports.module = connectMongoDB();