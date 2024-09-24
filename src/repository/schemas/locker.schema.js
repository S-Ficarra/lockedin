import mongoose from "mongoose";

// Définir le schéma pour Locker
const lockerSchema = new mongoose.Schema({
    localisation: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'occupied', 'maintenance'],
        default: 'available'
    },
    lockerId: {
        type: Number,
        required: true
    }
});

const Locker = mongoose.model('Locker', lockerSchema);
export default Locker;
