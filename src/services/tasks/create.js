const models = require('../../models');

module.exports = async (task) => {
    try {
        const id = await models.create(task, 'tasks');
        return id;
    } catch (err) {
        return err;
    }
};