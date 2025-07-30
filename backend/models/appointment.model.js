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
    }
},{timestamps:true});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;