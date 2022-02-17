const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, collection) => {
    try {
        if (ObjectId.isValid(id)) {
            const mongoId = ObjectId(id);
            const row = await (await connection()).collection(collection).findOne(mongoId);
            if (!row) return undefined;
            return row;
        }
        return null;
    } catch (err) {
        return (err);
    }
};