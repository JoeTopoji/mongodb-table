const { MongoClient } = require('mongodb')
const { DB_NAME, COLLECTION_NAME, MONGO_URI } = require('./appconfig.json')

module.exports = async (filter, skip = 0, limit = 20) => {
  const client = await MongoClient.connect(MONGO_URI)

  const collection = client.db(DB_NAME).collection(COLLECTION_NAME)

  const cursor = collection.find(filter).skip(skip).limit(limit)

  const count = await collection.countDocuments(filter)

  const result = await cursor.toArray()

  await client.close()

  return { result, count }
}
