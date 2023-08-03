const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('', async (req, res) => {
    // res.render('news')
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=globe&from=2023-08-1&sortBy=popularity&apiKey=${process.env.API_KEY}`);
        // console.log(newsAPI.data)
        res.render('news', {articles: newsAPI.data.articles})
    
    } catch (error) {
        if(error.response){
            res.render('news', {article : null});
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            throw new Error(`Something went wrong while getting the data from API ${error}`);
        }
    } 
    
})

router.get('/:id', async(req ,res) => {
    let id = req.params.id
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${id}&from=2023-08-1&sortBy=popularity&apiKey=${process.env.API_KEY}`);
        res.render('about', {article : newsAPI.data.article})
    } catch (error) {
        if(error.response){
            res.render('about', {article : null});
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            throw new Error(`Something went wrong while getting the data from API ${error}`);
        }
    }
    
   
})

router.post('', async(req ,res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2023-08-1&sortBy=popularity&apiKey=${process.env.API_KEY}`);
        res.render('newSearch', {articles : newsAPI.data.articles})
    } catch (error) {
        if(error.response){
            res.render('newSearch', {articles : null});
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            throw new Error(`Something went wrong while getting the data from API ${error}`);
        }
    }
    
   
})

module.exports = router;