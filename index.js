const express= require('express');
const http= require('http');
const morgan= require('morgan');
const app= express();

app.use(morgan('dev'));

const port= 5000;
const hostname= "localhost";

const server= http.createServer(app);

server.listen(port, hostname, () => {

    console.log("Server is running on "+hostname+":" +port);
})

app.get("/", (req, res) => {

    res.send("Welcome to express");
})