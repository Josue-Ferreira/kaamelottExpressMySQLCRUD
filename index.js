require('dotenv').config();
const express = require('express');
const connect = require('./model/connection');
const app = express();
const knightRouter = require('./router/knights');
const port = process.env.PORT;

app.use(express.json());
app.use('/knights', knightRouter);

app.listen(port, err => err ? console.log(err) : console.log('Server is listening on port'+port));