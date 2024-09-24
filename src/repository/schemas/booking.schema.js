import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    locker: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Locker', 
        required: true 
    },
    startTime: { 
        type: Date, 
        default: Date.now 
    },
    endTime: { 
        type: Date 
    },
    status: { 
        type: String, 
        enum: ['active', 'completed', 'cancelled'], 
        default: 'active' 
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
