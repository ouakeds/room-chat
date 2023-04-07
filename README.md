# Node.js Socket.IO Server
This is a simple Node.js server using the Socket.IO library. It provides real-time communication between multiple clients connected to the same room.

## Requirements
- Node.js v19 or higher
- yarn package manager

## Installation

- Clone the repository:
```bash
git clone git@github.com:ouakeds/room-chat-client.git
```

- Install dependencies:

```bash
npm install
```

- Create a .env file at the root of the project, and add the following environment variables:
```.env
PORT=8000 # The port on which the server will run.
FRONT_URL=http://localhost:3000 # The URL of the front-end application, to enable Cross-Origin Resource Sharing (CORS).
````

To start the server, run:

```bash
npm run dev
```
or in production:
```bash
npm run build
npm start
```

The server will listen on the port specified in the PORT environment variable.

## Socket.IO

Socket.IO is used to enable real-time communication between clients connected to the same room. When a client sends a message, it is broadcasted to all other clients in the same room.

The server-side Socket.IO code can be found in the index.ts file.

## Contributing
Contributions are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.