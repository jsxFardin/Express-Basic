const express = require('express');
const app = express();
const port = 5000;
const path = require('path')

const { products } = require('./data')

app.get('/', (req, res) => {
    res.json(products);
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(port, () => {
    console.log('server is listening on port 5000...')
})