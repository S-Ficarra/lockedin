const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Veuillez entrer une adresse email valide"]
    },
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    nfcKey: {
        type: String,
        required: true,
        unique: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['student', 'admin', 'professor'],
        default: 'student'
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;
