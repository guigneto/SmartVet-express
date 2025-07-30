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
    }
});

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;