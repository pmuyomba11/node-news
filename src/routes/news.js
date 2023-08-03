const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('', async (req, res) => {
    // res.render('news')
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=technology&from=2023-08-1&sortBy=popularity&apiKey=${process.env.API_KEY}`);
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

router.get('/:name', async(req ,res) => {
    const articleID  = req.params.name;
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-29&sortBy=popularity&apiKey=${process.env.API_KEY}&id=${articleID}`);
        res.render('about')
    } catch (error) {
        if(error.response){
            res.render('about', {article : null});
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (err.request){
            res.render('about', { article : null})
        } else {
            res.render('about', {article : null})
            console.log('Error', err.message)
        }
    }
})



module.exports = router;