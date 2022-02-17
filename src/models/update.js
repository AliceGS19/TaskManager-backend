const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, Obj, collection) => {
    try {
        const mongoId = ObjectId(id);
        await (await connection())
          .collection(collection)
          .updateOne({ _id: mongoId }, { $set: { ...Obj } });
    } catch (err) {
        return (err);
    }
};