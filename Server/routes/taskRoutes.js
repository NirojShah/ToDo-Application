const express = require("express")
let {
    tasks
} = require("../data.js")


// Router Instance
const router = express.Router()

router.get("/", (req, res) => {
    tasks.map((task, id) => {
        task.id = id + 1
    })
    res.status(200).json({
        status: "success",
        data: {
            tasks
        }
    })
})

router.post("/", (req, res) => {
    let task = req.body.task
    tasks.push({
        id: tasks.length + 1,
        task
    })
    res.status(201).json({
        status: "success",
        data: {
            tasks
        }
    })
})

router.get("/:id", (req, res) => {
    const id = +req.params.id
    const taskIndex = tasks.findIndex(task => task.id === id)
    const task = tasks[taskIndex]
    if (taskIndex > -1) {
        res.status(201).json({
            status: "success",
            data: {
                task
            }
        })
    } else {
        res.status(200).json({
            status: "success",
            data: {
                message: "there is no task with this id."
            }
        })
    }
})

router.patch("/:id", (req, res) => {
    let id = +req.params.id
    let document = tasks.find(task => task.id === id)
    document["task"] = req.body.task
    res.status(200).json({
        status: "success",
        data: {
            document
        }
    })
})

router.delete("/:id", (req, res) => {
    let id = +req.params.id
    let taskIndex = tasks.findIndex(task => task.id === id)
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1)
        res.status(200).json({
            message: "task deleted successfully"
        })
    } else {
        res.status(200).json({
            message: "data not found...."
        })
    }
})

module.exports = router;