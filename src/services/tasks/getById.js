const models = require('../../models');

module.exports = async (id) => {
    try {
        const task = await models.getById(id, 'tasks');
        return task;
    } catch (err) {
        return err;
    }
};