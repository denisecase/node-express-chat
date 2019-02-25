# node-chat-server

> Node.js and Socket.io make full-duplex communication easy 
> (full 2-way, like a cell phone conversation)

## Links

- [Demo](https://denisecase.github.io/node-chat-server/)
- [Source](https://github.com/denisecase/node-chat-server)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code, or Notepad++, or Chrome)

## Benefits

- Folder-based
- Easy to write
- Node.js non-blocking event loop supports many concurrent requests
- Socket.io makes full duplex communication easy

## Prerequisites

- [node-server](https://github.com/denisecase/node-server)
- [node-express](https://github.com/denisecase/node-express)

## Install Dependencies Listed in package.json

Open PowerShell here as admin and run:

```PowerShell
npm install
```

## Start your Server

Start your app with nodemon. Verify node_modules was created. Review the contents.

```PowerShell
nodemon app.js
```

## Open a Browser Client

1. Open a web browser.
2. Go to the URL: <http://127.0.0.1:3000/> or <http://localhost:3000/>.

## Use PowerShell and ipconfig to get your IP address

1. Open PowerShell as Admin, run ipconfig.
1. Find your IPv4 address.
1. Invite others to interact with your server-side app.

## DO NOT COMMIT node_modules to the Repo

We don't want to commit the auto-generated node_modules - and other things like developer-specific contents, local history, etc.

List all files and folders for git to ignore (not commit and push to the repo) to a file in the root folder named: .gitignore

## Create .gitignore (with no name)

To create a file without a name, there are 3 common options:

1. In Windows File Explorer, create ".gitignore." (Type a dot at beginning and at the end. It will drop the second dot.
2. In Git Bash: `touch .gitignore`
3. In PowerShell:  `ni .gitignore`

## Terms

- full duplex
- Socket.io
- npm install
- node_modules
- package-lock.json

## Reference

- [Create Simple Chat App Using Node.js, Express, and Socket.io](http://javabeginnerstutorial.com/javascript-2/create-simple-chat-application-using-node-js-express-js-socket-io/)

## Resources

- [Bootstrap Material Design CDN](https://mdbootstrap.com/md-bootstrap-cdn/)
- [HTML Validator](https://validator.w3.org/)
- [JavaScript Standard Style Validator](https://standardjs.com/demo.html)

## See Also

- [js-console](https://github.com/profcase/js-console)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [node-server](https://github.com/denisecase/node-server)
- [node-express](https://github.com/denisecase/node-express)
- [node-express-chat](https://github.com/denisecase/node-express-chat)
