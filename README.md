# CRUD API

A Node.js project demonstrating two different approaches to building HTTP servers: one using the native `http` module and another using the Express.js framework.

## Project Structure

```
Crud-API/
├── app.js          # HTTP server using Node.js built-in 'http' module
├── indx.js         # Express.js REST API with CRUD operations
├── package.json    # Project dependencies and configuration
├── .gitignore      # Git ignore file
└── README.md       # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or navigate to the project directory:
```bash
cd /workspaces/Crud-API
```

2. Install dependencies:
```bash
npm install
```

## Project Overview

This project contains two Node.js applications demonstrating different server implementations.

### 1. app.js - Native HTTP Server

A basic HTTP server using Node.js's built-in `http` module.

**Features:**
- Lightweight server without external dependencies
- Two simple endpoints
- JSON response handling

**Running:**
```bash
node app.js
```

**Endpoints:**

| Method | URL | Response |
|--------|-----|----------|
| GET | `/` | "hello world" |
| GET | `/api/courses` | `[1, 2, 3]` (JSON array) |

The server listens on **port 5000**.

### 2. indx.js - Express.js REST API

A full-featured REST API using the Express.js framework for managing cloud resources.

**Features:**
- Complete CRUD operations (Create, Read, Update, Delete)
- JSON request/response handling
- Parameterized routing
- Error handling with appropriate HTTP status codes
- Port configuration via environment variables

**Running:**
```bash
node indx.js
```

**Database:**
In-memory array of cloud objects:
```javascript
[
  { id: 1, name: 'cloud1' },
  { id: 2, name: 'cloud2' },
  { id: 3, name: 'cloud3' }
]
```

**API Endpoints:**

| Method | URL | Description | Response |
|--------|-----|-------------|----------|
| GET | `/` | Home route | "hello world" |
| GET | `/api/cloud` | Get all clouds | Array of all cloud objects |
| GET | `/api/cloud/:id` | Get cloud by ID | Single cloud object or 404 error |
| POST | `/api/cloud` | Create new cloud | Confirmation message |
| PUT | `/api/cloud/:id` | Update cloud | Confirmation message |
| DELETE | `/api/cloud/:id` | Delete cloud | Confirmation message |

The server listens on **port 5000** (or the port specified in the `PORT` environment variable).

**Example Requests:**

```bash
# Get all clouds
curl http://localhost:5000/api/cloud

# Get cloud with ID 1
curl http://localhost:5000/api/cloud/1

# Create new cloud
curl -X POST http://localhost:5000/api/cloud

# Update cloud with ID 1
curl -X PUT http://localhost:5000/api/cloud/1

# Delete cloud with ID 1
curl -X DELETE http://localhost:5000/api/cloud/1
```

## Configuration

### Environment Variables

The Express server supports the following environment variable:

- `PORT`: Custom port number (default: 5000)

**Example:**
```bash
PORT=3000 node indx.js
```

## Dependencies

- **express** (^4.17.2) - Fast, unopinionated web framework for Node.js

## Technical Notes

### app.js
- Uses Node.js native `http` module
- Manual request/response handling
- Suitable for simple applications or learning purposes
- No external dependencies required

### indx.js
- Uses Express.js framework
- Simplified routing and middleware support
- RESTful API design
- Better suited for production applications

## Error Handling

The Express API includes error handling:
- Returns **404 status** when a cloud with the specified ID is not found
- Returns appropriate error messages

## Development Tips

1. **Testing the API:**
   - Use `curl` for command-line testing
   - Use Postman or Insomnia for GUI testing
   - Use VS Code REST Client extension

2. **Debugging:**
   - Add `console.log()` statements to track requests
   - Use Node.js debugger with `node --inspect indx.js`

3. **Future Enhancements:**
   - Add request body parsing with `express.json()` middleware
   - Implement actual database operations (MongoDB, PostgreSQL, etc.)
   - Add request validation
   - Implement authentication and authorization
   - Add comprehensive error handling and logging
   - Create unit tests

## License

ISC

## Author

