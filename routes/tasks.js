const express = require('express');
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    filterTasksByStatus,
} = require('../controllers/taskController');

const router = express.Router();

// API endpoints
router.get('/', getAllTasks);                // Get all tasks
router.post('/', createTask);               // Create a task
router.put('/:id', updateTask);             // Update a task by ID
router.delete('/:id', deleteTask);          // Delete a task by ID
router.get('/status/:status', filterTasksByStatus); // Filter tasks by status

module.exports = router;
