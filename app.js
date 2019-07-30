// When using sockets, require the native Node.js http package
const http = require('http')  

// Require native path (__dirname is the folder of the current file)
const path = require('path');

// Require config - don't recompile just to change local port!
const config = require('config')

// require Express framework to assist with middleware and routing
const express = require('express') 

// create an Express web app
const app = express()  

// make an http server from the app
const server = http.createServer(app)  

// make a Socket.io server (io) from our http server
const io = require('socket.io')(server) 

// Use hosting values if available, otherwise default 
const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get("hostname")
const port = process.env.PORT || config.get("port");

// By default, Express does not serve static files. 
// use middleware to define a static assets folder 'public'
app.use(express.static('public'));

// on a GET request to default page, serve html
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

// on a connection event, act as follows (socket interacts with client)
io.on('connection', (socket) => {
  socket.on('chatMessage', (from, msg) => {  // on getting a chatMessage event
    io.emit('chatMessage', from, msg)  // emit it to all connected clients
  })
  socket.on('notifyUser', (user) => {  // on getting a notifyUser event
    io.emit('notifyUser', user)  // emit to all
  })
})

server.listen(port, hostname, () => {
  // Tell the user where to find the app (use backtics with variables)
  console.log(`Server running at http://${hostname}:${port}/`)
})