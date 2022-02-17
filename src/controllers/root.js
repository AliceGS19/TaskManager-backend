const express = require('express');
const tasksController = require('./tasks/router');

const root = express.Router({ mergeParams: true });

root.use('/tasks', tasksController);

module.exports = root;