require('dotenv').config({
  path: ".env"
});
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = process.env.DB_NAME;

let dbConnection = null;

module.exports = async () => {
    try {
      if (dbConnection) return dbConnection;
      dbConnection = await (await MongoClient.connect(
        MONGO_DB_URL,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },
        )).db(DB_NAME);
        return dbConnection;
    } catch (err) {
      console.log(err.message);
      process.exit(1);
    }
  };