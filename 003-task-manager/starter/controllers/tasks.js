/**
 * Goals :
 * get all tasks
 * get single task
 * create new task
 * update task
 * delete task
 */

const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");
const {createCustomError} = require("../errors/custom-error");


const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
    //of course you can send more information
    //res.status(200).json({ tasks, amount: tasks.length });

})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    //shorthand for -> const taskID = req.params.id;
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
        return next(createCustomError("Task with id not found", 404));
    }

    res.status(200).json({ task });
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;

    //options (third param) are important
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });

    if (!task) {
        return next(createCustomError("Task with id not found", 404));
    }

    res.status(200).json({ task });
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
        return next(createCustomError("Task with id not found", 404));
    }

    //below are all valid options
    //res.status(200).json({task});
    //res.status(200).send();
    res.status(200).json({ task: null, status: "success" });
})

module.exports = { getAllTasks, getSingleTask, createTask, updateTask, deleteTask }