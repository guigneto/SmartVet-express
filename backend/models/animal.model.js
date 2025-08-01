import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    breed:{
        type: String,
        required: true
    },
    birthYear:{
        type: Number,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 86400 // 24 horas (86400 segundos)
    }
});

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;