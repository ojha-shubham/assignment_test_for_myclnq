const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

// Use task routes
app.use('/tasks', taskRoutes);

// Catch-all for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
