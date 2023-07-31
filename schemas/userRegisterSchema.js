const express = require('express');
const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserRegisterModel = mongoose.model("UserRegisterModel", userRegisterSchema)

module.exports = UserRegisterModel