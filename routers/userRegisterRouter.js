const express = require('express');
const userRegisterRouter = express.Router();
const UserRegisterModel = require('../schemas/userRegisterSchema')
const bcyrpt = require('bcrypt')
// const users = require('../db-connect')
// const mongoose = require('mongoose')

// const userExists = (username, users) => {

//     const userExists = users.find((user) => user.username === username)
//     if(userExists){
//         res.json({message: "User Already exists with the username"})
//     } else {
//         res.json({message: "User Registered Succesfully"})
//     }
    
// }

userRegisterRouter.route('/').post(async (req, res) => {
    try {

        const {username, email, password } = req.body;

        const hashedPassword = await bcyrpt.hash(password, 10);
        const user = new UserRegisterModel({
            username: username,
            email: email,
            password: hashedPassword
        })

        
        const users = await UserRegisterModel.find()
        
        const userExists = users.find((Existinguser) => Existinguser.username === username)
        // console.log("userExists", userExists)
        
        if(userExists){
            res.status(401).json({message: "User Already exists with the username"})
        } else {
            res.status(200).json({message: "User Registered Succesfully"})
        }
        
        await user.save()
        // console.log(users)
        
        
    } catch (e) {
        res.status(500).json({message: "Error saving the user"})
        console.log(e.message)
    }
    
    
})




module.exports = userRegisterRouter;