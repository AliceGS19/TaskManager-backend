const models = require('../../models');

module.exports = async (id) => {
    try {
        await models.remove(id, 'tasks');
    } catch (err) {
        return err;
    }
};