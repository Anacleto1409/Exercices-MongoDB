const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./mongodb")

const DB_NAME = "exercicios-sabino"
const COLLECTION_NAME = "reminders"


async function getAllReminders() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}
async function getReminderById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) })
}
async function insertReminder(reminder) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.insertOne(reminder)
}

async function updateReminderById(reminder, id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...reminder } })
}

module.exports = {
    getAllReminders,
    insertReminder,
    getReminderById,
    updateReminderById,
    
}