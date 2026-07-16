# node-express-chat

> Node.js and Socket.io make full-duplex communication easy
> (full 2-way, like a cell phone conversation)

## Links

- [Source](https://github.com/denisecase/node-express-chat)

## Requirements

- Node.js (and npm, included with Node)
- A browser (e.g., Chrome)
- A text editor with a terminal (e.g., VS Code)

## Responsive Style

- [Tachyons](https://tachyons.io/)

## Benefits

- Still no build tools needed
- Node.js non-blocking event loop supports many concurrent requests
- Socket.io makes full duplex communication easy
- Express provides middleware, static-file serving, and routing.
- Multiple browser clients can exchange messages immediately.

## Earlier Examples

- [node-server](https://github.com/denisecase/node-server)
- [node-express-app](https://github.com/denisecase/node-express-app)

## Terminal 1. Install Dependencies

Open default terminal (if Windows use PowerShell) in the root project folder and run:

```shell
npm update
npm install
npm audit fix
```

## Terminal 1. Run the App

In the same terminal, start your app.

```shell
npm run dev
```

Keep this terminal open while using the application.
Nodemon starts the server and restarts it when application files change.
A successful startup should report something similar to:

```shell
[nodemon] starting `node app.js`
Server listening on 0.0.0.0:3003
Open http://localhost:3003/
```

The address 0.0.0.0 means that the server is listening on all available IPv4 network interfaces.
Do not enter `http://0.0.0.0:3003/` in the browser - it's
is a server binding address rather than a browser destination.

<details>

<summary>Optional: Click to Verify Server</summary>

## Terminal 2. Verify the Server

Leave Terminal 1 open with the server running.
Open a second terminal in the root project folder.
Verify that the server is accepting connections on port 3003.

If Windows PowerShell, use:

```shell
Test-NetConnection localhost -Port 3003
```

If macOS or Linux use:

```shell
nc -zv 127.0.0.1 3003
```

Success might appear like this:

```shell
WARNING: TCP connect to (::1 : 3003) failed

ComputerName     : localhost
RemoteAddress    : 127.0.0.1
RemotePort       : 3003
InterfaceAlias   : Loopback Pseudo-Interface 1
SourceAddress    : 127.0.0.1
TcpTestSucceeded : True
```

Or request the page directly from the server:

```shell
curl.exe -i http://localhost:3003/
```

A successful request should start with:

```shell
HTTP/1.1 200 OK
```

Use the results to help identify problems:

- `TcpTestSucceeded : False` means the server is not accepting connections on port 3003.
- `HTTP/1.1 404 Not Found` means Express could not find the requested page.
- `HTTP/1.1 500 Internal Server Error` means the application encountered an error.
- `HTTP/1.1 200 OK` means Express successfully returned the page.

</details>

## Open a Browser Client

1. Open a web browser.
2. Go to the URL: <http://127.0.0.1:3003/> or <http://localhost:3003/>.

## Find Your IP Address

Open PowerShell as Admin, run `ipconfig`. Locate your IPv4 address. Invite others to interact with your hosted chat app.

## Terms

- full duplex
- [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- npm install
- npx fixpack
- [Socket.io](https://socket.io/)

## Reference

- [Create Simple Chat App Using Node.js, Express, and Socket.io](http://javabeginnerstutorial.com/javascript-2/create-simple-chat-application-using-node-js-express-js-socket-io/)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
- [fixpack - auto-organize package.json](https://www.npmjs.com/package/fixpack)
