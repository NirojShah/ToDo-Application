const http = require("http")
const mongoose = require("mongoose")
const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({
    path:"./.env"
})


// Connect to DB
// mongoose.connect("mongodb://127.0.0.1:27017/ToDoTasks").then(() => {
//     console.log("Connected to DB")
// }).catch((err) => {
//     console.log(err)
// })

// Connect to db atlas
// local
// cloud 
mongoose.connect(process.env.MONGODB_CLOUD).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err)
})
 

let server = http.createServer(app)

server.listen(process.env.PORT, (err) => {
    if (err) console.log(err)
    console.log("SERVER RUNNING AT PORT NO : " + process.env.PORT)
})