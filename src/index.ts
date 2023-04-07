import { createServer } from "http";
import { Server, Socket } from "socket.io";
import RoomMessage from "./types/message.interface";
require('dotenv').config();

const httpServer = createServer();
const frontUrl = process.env.FRONT_URL ?? "http://localhost:3000";

const io = new Server(httpServer, {
  cors: {
    origin: [frontUrl],
    credentials: false
  }
});

const messages: RoomMessage[] = []

io.on("connection", (socket: Socket) => {

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('message', (roomMessage: RoomMessage) => {
    messages.push(roomMessage)
    io.to(roomMessage.room).emit('chat message', {message: roomMessage.message, author: roomMessage.author});
  });

  // Création d'une nouvelle salle de chat
  socket.on('join room', (room: string) => {
    socket.join(room);
    const roomMessages = messages.filter((message) => message.room === room);
    socket.emit("get messages", roomMessages);
  });
});

httpServer.listen(8000);