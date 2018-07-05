const express = require('express');
const bodyParser = require('body-parser');
const BlockChain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new BlockChain();

app.use(bodyParser.json());
/**
 * create a get http method
 * first parameter is the path
 * second parameter involves the request and response objects
 */
app.get('/blocks', (req, res) => {
    res.json(bc.chain);

});

app.post('/mine', (req,res) => {

    const block = bc.addBlock(req.body.data);
    console.log(`New block added ${block.toString()}`);

    res.redirect('/blocks');
});


app.listen(HTTP_PORT, () => console.log(`listening on port ${HTTP_PORT}`))