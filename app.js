// When using sockets, require the native Node.js http package
// Require native path (__dirname is the folder of the current file)
// Require config - don't recompile just to change local port!
// require Express framework to assist with middleware and routing
// create an Express web app
// make an http server from the app
// make a Socket.io server (io) from our http server
// Use hosting values if available, otherwise default 

// By default, Express does not serve static files. 
// use middleware to define a static assets folder 'public'

// on a GET request to default page, serve html

const http = require('http')  
const path = require('path');
const config = require('config')
const express = require('express') 

const app = express()  
const server = http.createServer(app)  
const io = require('socket.io')(server) 

const environment = process.env.NODE_ENV || 'development'
const hostname = process.env.HOSTNAME || config.get("hostname")
const port = process.env.PORT || config.get("port")

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

// on a connection event, set up the socket
io.on('connection', (socket) => {
  socket.on('chatMessage', (from, msg) => {  // on getting a chatMessage event
    io.emit('chatMessage', from, msg)        // emit it to all connected clients
  })
  socket.on('notifyUser', (user) => {  // on getting a notifyUser event
    io.emit('notifyUser', user)        // emit it to all connected clients
  })
})

  // Start listenting and tell user where to find the app 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})