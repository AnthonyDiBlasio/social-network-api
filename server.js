const express = require =('express');
const db = require('./config/connection');
//require model User
const { User } = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//creating new user

app.post()

//finding the all user 
app.get()

