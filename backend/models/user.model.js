import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"User name is required"],
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email:{
        type: String,
        required: [true,"User email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "User email must be a valid email address"],
    },
    password:{
        type: String,
        required: [true,"User password is required"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 86400 // 24 horas (86400 segundos)
    }
});

const User = mongoose.model("User", userSchema);

export default User;