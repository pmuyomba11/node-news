const express = require('express');
require('dotenv').config();
const app = express();
const colors = require('colors');
const PORT = process.env.PORT;

//Routers
app.get('/', (req,res) => {
    res.send("Hello World");
})


//lISTENING....
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}....`.green.inverse);
})