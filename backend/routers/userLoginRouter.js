const express = require('express')
const userLoginRouter = express.Router();
const UserRegisterModel = require('../schemas/userRegisterSchema');
const bcrypt = require('bcrypt');

userLoginRouter.route('/').post(async (req, res) => {

    try{
        const {username, password} = req.body;

        const user = await UserRegisterModel.findOne({username: username})

        if(!user) {
            res.status(404).json({message: "user not found with this username"})
        } else {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if(!isPasswordValid){
                res.status(401).json({message: "wrong password entered"})
    
            } else {
                res.status(200).json({message: "user login succesfull"})
                // console.log(user)
            }
    
        }      

    } catch(e) {
        res.status(500).json({message: "error occured while loggin you in."})
        console.log(e.message)
    }
    


})


module.exports = userLoginRouter;