const express= require('express');
const http= require('http');
const morgan= require('morgan');
const socket= require('socket.io');

const app= express();

app.use(morgan('dev'));

const port= 5000;
const hostname= "localhost";

const server= http.createServer(app);

server.listen(port, hostname, () => {

    console.log("Server is running on "+hostname+":" +port);
})

app.get("/", (req, res) => {

    res.sendFile(__dirname+"/public/index.html");
})

let socketServer= socket(server);

socketServer.on("connection", (socket) => {

    socket.on("chat", data => {

        socketServer.sockets.emit("chat", data);
    });

    socket.on("typing", (name) => {

        socket.broadcast.emit("typing", name);
    })
})