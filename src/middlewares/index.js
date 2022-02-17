const error = require('./error');

const authCreateBody = require('./tasks/authCreateBody');
const authUpdateBody = require('./tasks/authUpdateBody');

module.exports = {
    tasks: {
        authCreateBody,
        authUpdateBody,
    },
    error,
}