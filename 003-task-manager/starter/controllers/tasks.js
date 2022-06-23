/**
 * Goals :
 * get all tasks
 * get single task
 * create new task
 * update task
 * delete task
 */

const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
        //of course you can send more information
        //res.status(200).json({ tasks, amount: tasks.length });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getSingleTask = async (req, res) => {
    try {
        //shorthand for -> const taskID = req.params.id;
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});

        if(!task) {
            return res.status(404).json({msg:"Task with id does not exist"});
        }

        res.status(200).json({task});
    } catch(error) {
        res.status(500).json({msg:error});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;

        //options (third param) are important
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators:true
        });

        if(!task) {
            return res.status(404).json({msg:"Task with id does not exist, could not update"});
        }

        res.status(200).json({task});
    } catch(error) {
        res.status(500).json({msg:error});
    }
}

const deleteTask = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});

        if(!task) {
            return res.status(404).json({msg:"Task with id does not exist, could not delete"});
        }

        //below are all valid options
        //res.status(200).json({task});
        //res.status(200).send();
        res.status(200).json({task: null, status:"success"});
    } catch(error) {
        res.status(500).json({msg:error});
    }
}

module.exports = { getAllTasks, getSingleTask, createTask, updateTask, deleteTask }