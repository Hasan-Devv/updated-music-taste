require('dotenv').config()
const bp = require('body-parser')
const express = require('express');
const app = express();
const PORT = 4000;
const cors = require("cors")
const connectDB = require('./db-connect')
const UserDataRouter = require('./routers/userDataRouter')
const userRegisterRouter = require('./routers/userRegisterRouter')
const userLoginRouter = require('./routers/userLoginRouter')
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

connectDB()

app.use(cors())
app.use('/register', userRegisterRouter )
app.use('/userData', UserDataRouter)
app.use('/login', userLoginRouter )


app.listen(PORT, () => console.log('server up and running'))

