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
        minlength: [6,"Password must be at least 6 characters long"],
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;