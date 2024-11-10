const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config();
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.use(express.json()); // Accept the JSON data from the request
app.use(cors()); //Avoid CORS error

connectDB();

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join", (room) => {
    socket.join(room);
    console.log(`User joined room: ${room}`);
  });

  socket.on("chat message", (msg) => {
    io.to(msg.room).emit("chat message", msg);
  });

  socket.on("add-contact", ({ addedUserId, userId }) => {
    io.to(addedUserId).emit("new-contact", { userId });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chats", chatRoutes);
app.use("/api/v1/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server has Started and runnnig at http://localhost:${PORT}/`);
});
