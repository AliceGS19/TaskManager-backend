const models = require('../../models');

module.exports = async () => {
    try {
        const tasks = await models.list('tasks');
        return tasks;
    } catch (err) {
        return err;
    }
};