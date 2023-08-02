const express = require('express');
require('dotenv').config();
const app = express();
const colors = require('colors');
const PORT = process.env.PORT;
const newsRouter = require('./src/routes/news');



//Static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/imgs', express.static(__dirname + 'public/imgs'));
app.use('/js', express.static(__dirname + 'public/js'));
//Templating Engine...
app.set("view engine", "ejs"); //setting ejs as view engine for rendering
app.set('views', './src/views')


//Middleware
app.use('/', newsRouter);




//lISTENING....
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}....`.green.inverse);
})