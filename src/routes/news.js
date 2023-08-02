const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    // res.render('news')

    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-07-29&sortBy=popularity&apiKey=${process.env.API_KEY}`);
        // console.log(newsAPI.data)
        res.render('news', {articles: newsAPI.data.articles})
    
    } catch (error) {
        if(error){
            return errorResponse("Error fetching news", 500)
        }
    }
    
    
})

module.exports = router;