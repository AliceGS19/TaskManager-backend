const error = require('./error');

const authTask = require('./tasks/authTask');
const authCreateBody = require('./tasks/authCreateBody');
const authUpdateBody = require('./tasks/authUpdateBody');

module.exports = {
    tasks: {
        authTask,
        authCreateBody,
        authUpdateBody,
    },
    error,
}