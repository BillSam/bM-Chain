const express = require('express');
const BlockChain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new BlockChain();
/**
 * create a get http method
 * first parameter is the path
 * second parameter involves the request and response objects
 */
app.get('/blocks', (req, res) => {
    res.json(bc.chain);

});


app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`))