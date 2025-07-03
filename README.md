# Basic Notes Backend

This is a simple backend application built with **Express** and **TypeScript**. It provides basic **CRUD** operations to manage notes.

## Features

- **GET /notes**: Fetch all notes.
- **GET /notes/:id**: Fetch a specific note by ID.
- **POST /notes**: Create a new note.
- **PATCH /notes/:id**: Update an existing note by ID.
- **DELETE /notes/:id**: Delete a note by ID.

## API Endpoints

| Method | Endpoint        | Description                  |
|--------|----------------|------------------------------|
| GET    | /notes         | List all notes               |
| GET    | /notes/:id     | Get a note by ID             |
| POST   | /notes         | Create a new note            |
| PATCH  | /notes/:id     | Update a note by ID          |
| DELETE | /notes/:id     | Delete a note by ID          |

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/basic-notes-backend.git
   cd basic-notes-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript files:

   ```bash
   npm run build
   ```

4. Start the server in development mode (with hot-reloading):

   ```bash
   npm run dev
   ```

   Or start the app in production mode:

   ```bash
   npm start
   ```

The server will be running at `http://localhost:3000`.

## Technologies Used

* **Express**: Web framework for Node.js.
* **TypeScript**: JavaScript with type safety.
* **Nodemon**: For automatic server restart during development.
* **ts-node**: Runs TypeScript files directly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.