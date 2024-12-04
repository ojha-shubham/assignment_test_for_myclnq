Getting Started
Run the API Server
Make sure you have Node.js installed, then run:

node server.js
The server will start at http://localhost:3000.

All endpoints are relative to the base URL:

http://localhost:3000/tasks
API Endpoints
1. Create a Task
POST /tasks

Request Body (JSON):

{
    "title": "Task title",
    "description": "Task description"
}
Example Request:

json
Copy code
{
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread"
}
Response (201 Created):

json
Copy code
{
    "message": "Task created successfully",
    "task": {
        "id": "unique-id",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread",
        "status": "pending"
    }
}
2. Get All Tasks
GET /tasks

Response (200 OK):

[
    {
        "id": "unique-id",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread",
        "status": "pending"
    },
    {
        "id": "another-unique-id",
        "title": "Workout",
        "description": "Go to the gym",
        "status": "completed"
    }
]
3. Update a Task
PUT /tasks/:id

URL Parameters:

id (string): The unique ID of the task to update.
Request Body (JSON):

{
    "status": "completed" // or "pending"
}
Example Request:


{
    "status": "completed"
}
Response (200 OK):


{
    "message": "Task updated successfully",
    "task": {
        "id": "unique-id",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread",
        "status": "completed"
    }
}
Response (404 Not Found):

{
    "error": "Task not found"
}
4. Delete a Task
DELETE /tasks/:id

URL Parameters:

id (string): The unique ID of the task to delete.
Response (200 OK):

{
    "message": "Task deleted successfully"
}
Response (404 Not Found):

{
    "error": "Task not found"
}
5. Filter Tasks by Status
GET /tasks/status/:status

URL Parameters:

status (string): The status to filter by (pending or completed).
Response (200 OK):

[
    {
        "id": "unique-id",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread",
        "status": "pending"
    }
]
Response (200 OK - No Matching Tasks):

[]
Examples for Testing
You can use Postman, curl, or any HTTP client to test the API.

Postman Configuration
Base URL: http://localhost:3000/tasks
Headers:
Content-Type: application/json
Setup & Development
Install Dependencies

npm install
Start Server

node server.js
Folder Structure

task-manager/
├── server.js           # Main server file
├── routes/
│   └── tasks.js        # API routes
├── controllers/
│   └── taskController.js # API logic
├── data/
│   └── tasks.json      # Persistent task storage
└── README.md           # Documentation
Contact
For questions or issues, feel free to contact Shubham Ojha.
