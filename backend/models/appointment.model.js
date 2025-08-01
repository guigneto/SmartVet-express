import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true
    },
    urgency:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    animalId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Animal",
        required: true,
        index: true // Ensures fast lookups by animalId
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 86400 // 24 horas (86400 segundos)
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;