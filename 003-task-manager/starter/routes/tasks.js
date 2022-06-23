const express = require('express');
const router = express.Router();

const {getAllTasks, getSingleTask, createTask, updateTask, deleteTask} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);
//the expectation with puts is that EVERYTHING is update
//with patch you are expected to only update what is passed in

module.exports = router;