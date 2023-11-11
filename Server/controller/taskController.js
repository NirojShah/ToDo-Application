const Task = require("../models/Task.js")

const postTask = async (req, res) => {
    try {

        //--> Creating new instance of data and saving into db

        // const newTask = new Task({
        //     task:req.body.task
        // })
        // newTask.save()

        // OR

        //--> this method creates the instance by itself and saves the data into db

        let newTask = await Task.create({
            task: req.body.task
        })
        res.status(200).json({
            status: "Success",
            data: {
                newTask
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const getTasks = async (req, res) => {
    try {
        let tasks = await Task.find()
        res.status(200).json({
            status: "Success",
            data: {
                tasks
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                task
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const updateTask = async (req, res) => {
    try {
        // const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body)

        // OR

        const {
            task
        } = req.body

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            task: task
        }, {
            new: true
        })
        res.status(201).json({
            status: "success",
            data: {
                updatedTask
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        // console.log(req.params.id)
        await Task.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: "success",
            data: null
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
}


module.exports = {
    postTask,
    updateTask,
    getTask,
    getTasks,
    deleteTask
}