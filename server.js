let express = require('express');
let app = express();
let port = 3000;
const axios=require('axios');

app.get('/', (req,res) => {
	res.send("Welcome to assignment 9");
})
app.get('/say', (req,res) => {
    axios.get(`https://mzgbhvfh41.execute-api.us-east-2.amazonaws.com/production/myfunction/?keyword=${req.query.keyword}`)
    .then(result => {
        res.status(200)
        res.send(result.data)
    })
    .catch(err => {
        res.status(400)
        res.send(err)
    })
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+ port);
});