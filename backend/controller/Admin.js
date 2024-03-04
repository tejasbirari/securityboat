const Admin = require('../database/models/Admin');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const admin = async(req, res) => {
    try {
        const { username, password } = req.body;

        // Finding if Admin exists or not
        const existingAdmin = await Admin.findOne({ username: username })

        // If Admin not found return "User not found"
        if(!existingAdmin){
            return res.status(404).json({ message: "User not found" });
        }

        // Check if given password matches with password stored in database, if not return "Incorrect Password"
        if(existingAdmin.password !== password){
            return res.status(404).json({ message: "Incorrect Password" });
        }

        // If all credentials are valid then assign token to admin 
        const token = jwt.sign( {username: existingAdmin.username}, process.env.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: '3h',
        } )
        
        return res.status(200).json({ user: username, token: token })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error"})
    }
}

module.exports = { admin }