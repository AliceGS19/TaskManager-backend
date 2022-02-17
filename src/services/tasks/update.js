const models = require('../../models');

module.exports = async (id, updatedTask) => {
    try {
        await models.update(id, updatedTask, 'tasks');
        return null
    } catch (err) {
        return err;
    }
};