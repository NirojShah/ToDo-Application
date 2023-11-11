const express = require("express")


const {getTasks,getTask,postTask,deleteTask,updateTask} = require("../controller/taskController.js")


let router = express.Router()

router.get("/",getTasks )
router.post("/",postTask)
router.get("/:id",getTask)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)



// router.route("/").get(getTasks).post(postTask)
// router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)


module.exports = router;