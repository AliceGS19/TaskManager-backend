const express = require('express');
const { error } = require('./middlewares');
const root = require('./controllers/root');

const app = express();

app.use(express.json());

app.use('/', root);

app.use(error);

module.exports = app