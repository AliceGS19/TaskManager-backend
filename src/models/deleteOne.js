const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, collection) => {
    try {
            const mongoId = ObjectId(id);
             await (await connection())
              .collection(collection).deleteOne({ _id: mongoId });
    } catch (err) {
        return (err);
    }
};