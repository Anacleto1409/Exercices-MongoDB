const { getAllReminders, insertReminder, getReminderById, updateReminderById, removeReminderById } = require("../data/reminders")


async function findAllReminders() {
    const reminders = await getAllReminders()
    return reminders
}
async function findReminderById(id) {
    const reminder = await getReminderById(id)
    return reminder
}
async function createReminder(reminder) {
    const createdReminder = await insertReminder(reminder)
    return createdReminder.insertedId
}
async function changeReminderById(reminder, id) {
    const reminderr = await updateReminderById(reminder, id)
    return reminderr
}

module.exports = {
    findAllReminders,
    createReminder, findReminderById, changeReminderById
}
