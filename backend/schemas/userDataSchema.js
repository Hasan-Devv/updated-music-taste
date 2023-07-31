const express = require('express');
const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    FavGenre: {
        required: true,
        type: String
    },
    favAlbum : {
        required: true,
        type: String
    },
    favArtist: {
        required: true,
        type: String
    }
});

const UserData = mongoose.model("UserData", userDataSchema)

module.exports = UserData