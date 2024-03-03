const User = require('../database/models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signUp = async(req, res) => {
    try {
        const { firstName, lastName, mobile, password } = req.body;

        // Check if the provided mobile no. is already an existing user
        const existingUser = await User.findOne({ mobile });

        // If an existing user with the mobile no. is found
        if(existingUser){
            return res.status(409).json({ message:"Mobile No. already in use" });
        }

        // If mobile no. is not in use, proceed with user sign-up
        // Convert Password in Hashed Password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Store all details in database, with hased password
        const createUser = new User({
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            password: hash
        })

        // Check if query is successful or not
        const success = await createUser.save();

        // On successful signup
        if(success) {
            return res.status(201).json({ message: "User Signup"});
        }
    } catch (error) {
        console.log("Signup Failed: ", error);
        return res.status(400).json({ message: "Signup Failed"});
    }
}

const login = async(req, res) => {
    try {
        const { mobile, password} = req.body;

        // Check if user exists or not 
        const existingUser = await User.findOne({ mobile });

        if(!existingUser){
            return res.status(404).json({ message:"Invalid mobile no." });
        }

        // Compare password with stored hash password
        const passwordMatch = bcrypt.compareSync(password, existingUser.password);

        if(!passwordMatch){
            return res.status(401).json({ message:"Invalid password" });
        }

        // Assign Token, if all details are okay
        const token = jwt.sign({user: existingUser.mobile}, process.env.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: '6h',
        });

        return res.status(200) .json({ message: "Login successful", token });

    } catch (error) {
        console.log("Login Failed: ", error);
        return res.status(400).json({ message: "Login Failed"});
    }
}

module.exports = { signUp, login }