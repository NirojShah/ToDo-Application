const {
    Schema,
    model
} = require("mongoose")


let task_Schema = new Schema({
    task: {
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true
})


module.exports = model("task",task_Schema)