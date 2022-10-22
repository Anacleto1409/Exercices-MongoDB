const express = require("express");
const { ObjectId } = require("mongodb");
const { findAllReminders, createReminder, findReminderById, changeReminderById, deleteReminderById } = require("./services/reminders");
const PORT = process.env.PORT ?? 3000;
const app = express()
app.use(express.json())

app.get("/api/reminders", async (req, res) => {
    const reminders = await findAllReminders()
    res.status(200).json(reminders)
})
app.post("/api/reminders", async (req, res) => {
    const _id = await createReminder(req.body)
    return res.status(201).json({ _id })
})
app.get("/api/reminders/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.sendStatus(404)
    }
    const reminder = await findReminderById(req.params.id)
    if (!reminder) {
        return res.sendStatus(404)
    }
    res.status(200).json(reminder)
})
app.patch("/api/reminders/:id", async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.sendStatus(404)
    }
    const reminder = await changeReminderById(req.body, req.params.id)
    console.log(reminder)
    if (!reminder) {
        return res.sendStatus(404)
    }
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log("a escuta")
})