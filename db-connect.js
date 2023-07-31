require('dotenv').config()
const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const PASSWORD = process.env.PASS
const UserData = require('./schemas/userDataSchema')
const UserRegisterModel = require('./schemas/userRegisterSchema');

const url = `mongodb+srv://dbUser:hasanwasbad@globomantics.wsycduk.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async () => {
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          
        console.log('MongoDB connected!')
        const allUsers = await UserData.find()
        
        
        console.log(allUsers)
        

    } catch(e) {
        console.error(`Error connecting to MongoDB, ${e.message}`)
    }

}

module.exports = connectDB;
