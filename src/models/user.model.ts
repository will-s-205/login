const mongoose = require('mongoose');

const User = new mongoose.Schema({
    // name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // newsletter: { type: Boolean, required: false },
    // date: { type: Date, default: Date.now },
},
    { collection: 'userCreds' }
);

const UserCreds = mongoose.model('userCreds', User);

module.exports = UserCreds;