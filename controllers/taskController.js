const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, '../data/tasks.json');

// Helper: Read tasks from JSON file
const readTasks = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(filePath));
};

// Helper: Write tasks to JSON file
const writeTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

// Get all tasks
const getAllTasks = (req, res) => {
    const tasks = readTasks();
    res.status(200).json(tasks);
};

// Create a new task
const createTask = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const tasks = readTasks();
    const newTask = { id: uuidv4(), title, description, status: 'pending' };
    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json({ message: 'Task created successfully', task: newTask });
};

// Update a task
const updateTask = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['pending', 'completed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks[taskIndex].status = status;
    writeTasks(tasks);

    res.status(200).json({
        message: 'Task updated successfully',
        task: tasks[taskIndex],
    });
};

// Delete a task
const deleteTask = (req, res) => {
    const { id } = req.params;

    const tasks = readTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);

    if (tasks.length === updatedTasks.length) {
        return res.status(404).json({ error: 'Task not found' });
    }

    writeTasks(updatedTasks);

    res.status(200).json({ message: 'Task deleted successfully' });
};

// Filter tasks by status
const filterTasksByStatus = (req, res) => {
    const { status } = req.params;

    if (!['pending', 'completed'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    const tasks = readTasks();
    const filteredTasks = tasks.filter((task) => task.status === status);

    res.status(200).json(filteredTasks);
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    filterTasksByStatus,
};