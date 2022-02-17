const express = require('express')

const list = require('./list');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');

const { tasks: { authTask, authCreateBody, authUpdateBody } } = require('../../middlewares')

const router = express.Router({ mergeParams: true });

router.get('/', list);

router.delete('/:id', authTask, remove);

router.post('/', authCreateBody, create);

router.put('/:id', authUpdateBody, authTask, update);

module.exports = router