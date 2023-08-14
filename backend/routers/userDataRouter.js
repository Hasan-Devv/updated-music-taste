const express = require('express');
const app = express()
const bp = require('body-parser')
const mongoose = require('mongoose');
const UserDataRouter = express.Router()
const UserData = require('../schemas/userDataSchema')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());




UserDataRouter.route('/').post(async (req, res) => {
    
    try {
        let popularity = 0
        console.log(req.body)
        const { favGenre, favAlbum, favArtist } = req.body

        const userData = new UserData({
            FavGenre: favGenre,
            favAlbum: favAlbum,
            favArtist: favArtist
        })

        await userData.save()
        
        const allExistingUsersData = await UserData.find()
        // console.log(allExistingUsersData)
        allExistingUsersData.forEach((userdata) => {
            if (userdata.FavGenre === favGenre){
                popularity += 2;
            }
            if (userdata.favAlbum === favAlbum){
                popularity += 5;
            } 
            if (userdata.favArtist === favArtist){
                popularity += 4
            }
            
        })
        
        res.status(200).json({message: "User Data saved succesfully", popularity, userData})

        console.log(popularity)
       

    } catch (e) {
        console.error("Error saving data, " , e.message)
        res.status(500).json({message: "User data was not saved due to error"})
        console.log(req.body)
    }
    
})

module.exports = UserDataRouter

