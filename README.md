Getting Started
Run the API Server
Make sure you have Node.js installed, then run:

bash
Copy code
node server.js
The server will start at http://localhost:3000.

Base URL
All endpoints are relative to the base URL:

bash
Copy code
http://localhost:3000/tasks
API Endpoints
1. Create a Task
POST /tasks

Request Body (JSON):

json
Copy code
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
json
Copy code
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

json
Copy code
{
    "status": "completed" // or "pending"
}
Example Request:

json
Copy code
{
    "status": "completed"
}
Response (200 OK):

json
Copy code
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

json
Copy code
{
    "error": "Task not found"
}
4. Delete a Task
DELETE /tasks/:id

URL Parameters:

id (string): The unique ID of the task to delete.
Response (200 OK):

json
Copy code
{
    "message": "Task deleted successfully"
}
Response (404 Not Found):

json
Copy code
{
    "error": "Task not found"
}
5. Filter Tasks by Status
GET /tasks/status/:status

URL Parameters:

status (string): The status to filter by (pending or completed).
Response (200 OK):

json
Copy code
[
    {
        "id": "unique-id",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread",
        "status": "pending"
    }
]
Response (200 OK - No Matching Tasks):

json
Copy code
[]
Examples for Testing
You can use Postman, curl, or any HTTP client to test the API.

Postman Configuration
Base URL: http://localhost:3000/tasks
Headers:
bash
Copy code
Content-Type: application/json
Setup & Development
Install Dependencies

bash
Copy code
npm install
Start Server

bash
Copy code
node server.js
Folder Structure

bash
Copy code
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
