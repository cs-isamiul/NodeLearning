/**
 * Goals :
 * get all tasks
 * get single task
 * create new task
 * update task
 * delete task
 */

function getAllTasks(req, res) {
    res.send("all task");
}

function getSingleTask(req,res) {
    res.json({id:req.params.id});
}

function createTask(req,res) {
    res.json(req.body);
}

function updateTask(req,res) {
    res.send("update task");
}

function deleteTask(req,res) {
    res.send("delete task");
}

module.exports = {getAllTasks, getSingleTask, createTask, updateTask, deleteTask}