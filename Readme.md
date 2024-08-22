# Personal Notes API

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [GET /api/notes](#get-apinotes)
  - [GET /api/notes/:id](#get-apinotesid)
  - [POST /api/notes](#post-apinotes)
  - [PUT /api/notes/:id](#put-apinotesid)
  - [PATCH /api/notes/:id](#patch-apinotesid)
  - [DELETE /api/notes/:id](#delete-apinotesid)
- [Middleware](#middleware)
- [Contributing](#contributing)
- [License](#license)

## Features

* CRUD Operations: Create, Read, Update, and Delete notes.
* Validation: Basic validation for note creation and updates.
* Logging: Logs each request with method and URL.
* Error Handling: Handles errors and sends appropriate responses.
## Installation
1. Clone the Repository
```bash
git clone https://github.com/maharjansujal/personal_notes_api.git
```
2. Install Dependencies
Ensure that you have Node.js installed. Run the following command to install dependencies:  
```bash
npm install
```
## Usage

1. Start the Server
```bash
npm start
```
The server will start on '**http://localhost:3000**'.

2. API testing

Use tools like Postman or curl to interact with the API endpoints.

### API End points

## GET /api/notes
* **Description**: Retrives all notes
* Response: '**200 OK**' with a list of notes.

### GET /api/notes/
* **Description**: Retrieve a note by ID.
* Parameters:
* id (path): The ID of the note.
* Response: '**200 OK**' with the note data or '**404 Not Found**' if the note does not exist.

### POST /api/notes
* **Description**: Create a new note.
* **Request Body**:
```json
{
  "title": "Note Title",
  "content": "Note Content"
}
```
* **Response**: **201** Created with the created note.

### PUT /api/notes/:id
* **Description**: Replaces the entire note with the specified ID.
* **Request Body**:
```json
{
  "title": "New Title",
  "content": "New Content"
}
```
* **Response**: '**200 OK**' with the updated note or 404 Not Found if the note does not exist.

### PATCH /api/notes/:id
* **Description**: Partially update a note.
* **Request Body**:
```json
{
  "title": "Updated Title"
}
```
* **Response**: '**200 OK**' with the updated note or 404 Not Found if the note does not exist.
...

### DELETE /api/notes/:id
* **Description**: Partially update a note.
* **Parameters**:
    * '**id**' (path): The ID of the note.
* **Response**: '**200 OK**' with a success message or 404 Not Found if the note does not exist.
...

## Middleware

* **Logger**: Logs each request with method and URL.
* **Error Handler**: Catches and responds to errors.
* **Validator**: Validates request bodies and parameters.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
