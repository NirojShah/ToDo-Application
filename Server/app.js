const express = require("express");
const taskRouter = require("./routes/taskRoutes1");
const cors = require("cors")

// app instance
let app = express()


// Enabling CORS

app.use(cors())

// in-built middleware to process incoming json data
app.use(express.json())

app.use("/app/v1/tasks", taskRouter)

module.exports = app;