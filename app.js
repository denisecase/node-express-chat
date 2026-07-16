// === INCLUDE DEPENDENCIES ===

// Require the native Node.js HTTP package.
// Socket.IO attaches to an HTTP server rather than directly to the Express app.
const http = require('node:http')

// Require the native Node.js path package.
// __dirname identifies the folder containing this app.js file.
const path = require('node:path')

// Require config so local and hosting values can be changed
// without recompiling or editing application logic.
const config = require('config')

// Require the Express framework to provide middleware and routing.
const express = require('express')

// Require the Socket.IO Server class.
const { Server } = require('socket.io')

// === CREATE APP AND SERVER ===

// Create an Express web application.
const app = express()

// Create a native Node.js HTTP server from the Express application.
const server = http.createServer(app)

// Create a Socket.IO server attached to the HTTP server.
const io = new Server(server)

// === CONFIGURE HOST AND PORT ===

// Use the hosting HOST environment variable when available.
// Otherwise, use the configured hostname.
// Default to localhost-only access when neither value exists.
const hostname =
  process.env.HOST ||
  (config.has('hostname') ? config.get('hostname') : '127.0.0.1')

// Use the hosting PORT environment variable when available.
// Otherwise, use the configured port.
// Default to port 3003 when neither value exists.
const port = Number(
  process.env.PORT ||
  (config.has('port') ? config.get('port') : 3003)
)

// === CONFIGURE STATIC FILES ===

// Build an absolute path to the public folder.
// Using an absolute path prevents behavior from changing based on
// the directory from which the Node.js process was started.
const publicDirectory = path.join(__dirname, 'public')

// By default, Express does not serve static files.
// Use middleware to define public as the static assets folder.
//
// Express automatically serves public/index.html for a GET request to /,
// so a separate app.get('/') route is unnecessary.
app.use(express.static(publicDirectory))

// === CONFIGURE SOCKET.IO EVENTS ===

// When a browser establishes a Socket.IO connection,
// set up the events that this server accepts from that socket.
io.on('connection', (socket) => {
  // Log the unique Socket.IO connection identifier.
  console.log(`Socket connected: ${socket.id}`)

  // On receiving a chatMessage event from one client,
  // send the same sender name and message to all connected clients.
  socket.on('chatMessage', (from, msg) => {
    io.emit('chatMessage', from, msg)
  })

  // On receiving a notifyUser event from one client,
  // send the user value to all connected clients.
  socket.on('notifyUser', (user) => {
    io.emit('notifyUser', user)
  })

  // When this socket disconnects,
  // log its identifier and the reason for the disconnection.
  socket.on('disconnect', (reason) => {
    console.log(`Socket disconnected: ${socket.id}; ${reason}`)
  })
})

// === CONFIGURE AND START SERVER ===

// Listen for server-level errors such as an unavailable port
// or an invalid hostname.
server.on('error', (error) => {
  console.error('Server error:', error)
  process.exitCode = 1
})

// Start listening for HTTP and Socket.IO connections
// using the selected hostname and port.
server.listen(port, hostname, () => {
  // 0.0.0.0 and :: are valid server binding addresses,
  // but they are not useful browser destination addresses.
  // Display localhost as the browser address when listening
  // on all IPv4 or IPv6 network interfaces.
  const browserHostname =
    hostname === '0.0.0.0' || hostname === '::'
      ? 'localhost'
      : hostname

  // Report the actual address on which the server is listening.
  console.log(`Server listening on ${hostname}:${port}`)

  // Report the address that should be opened in a local browser.
  console.log(`Open http://${browserHostname}:${port}/`)
})