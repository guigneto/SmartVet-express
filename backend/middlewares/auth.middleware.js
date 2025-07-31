import { JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

// someone is making a request get user datails -> authorize middle -> verify token -> if valid -> next() -> get user details


const authorize = async (req, res, next) => {
    try{
        let token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]; // Extract token from Bearer scheme
        }

        
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token
        
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        req.user = user; // Attach user to request object
        next();
    }catch(error){
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
}

export default authorize;