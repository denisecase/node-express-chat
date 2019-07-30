const socket = io()

// initialize:
// Code in document ready or DOMContentLoaded will only run when DOM is ready for JavaScript code to execute. 
// Code in window load will run once the entire page (images, iframes), not just the DOM, is ready.

window.addEventListener('load', () => {
  // create a name for me and store it in the hidden field
  const name = makeid();
  $('#user').val(name);

  // configure event listener for button click
  document.querySelector("#button").addEventListener('click', submitfunction)

  // configure event listener for key up (especially the ENTER key)
  document.querySelector("#m").addEventListener('keyup', (event) => {
    if (event.keyCode === 13) { document.querySelector("#button").click() }
    // read my name from hidden field 
    const myName = $('#user').val()
    socket.emit('notifyUser', myName)
  })

  // emit a chatMessage event 
  socket.emit('chatMessage', 'System', `<b>${name}</b> has joined the discussion`);
})

/**
* @desc Logic after message is submitted (emits a chatMessage event)
* @param string $msg - the message to be displayed
* @return bool - refresh the page or not
*/
const submitfunction = () => {
  const from = $('#user').val()
  const message = $('#m').val()
  if (message !== '') { socket.emit('chatMessage', from, message) }
  // what language and selector is used below?
  // set the value to an empty string and
  // focus on the message box again
  $('#m').val('').focus()
}

/**
* @desc Logic after getting chatMessage event - append user & message
* @param string $from - the user who typed the message
* @param string $msg - the message to be displayed
*/
socket.on('chatMessage', (from, msg) => {
  // read my name from the hidden field
  const myName = $('#user').val()
  // is the message from me?
  const isFromMe = (from === myName)
  // use ternary operator to set the user name 
  const color = isFromMe ? 'green' : '#009afd'
  // if me, show 'Me', otherwise display the provided user name
  from = isFromMe ? 'Me' : from
  // add a new message list item element
  $('#messages').append(`<li><b style="color:${color}"> ${from}</b>: ${msg}</li>`)
})

/**
* @desc Logic after getting notifyUser event - display time-limited notification to others
* @param string $user - the user typing
*/
socket.on('notifyUser', user => {
  const myName = $('#user').val()
  if (user !== myName) { $('#notifyUser').text(`${user} is typing ...`) }
  const timeout_millisecs = 3000
  setTimeout(() => { $('#notifyUser').text('') }, timeout_millisecs)
})

/**
* @desc Create random name
* @return string - name
*/
const makeid = () => {
  const possible = 'abcdeghijklmnoprstu'
  let text = ''
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

/**
 * Note:
 * 
 * You can call functions that are defined AFTER the calling function. 
 * 
 * This is due to JavaScript 'hoisting'. 
 * On loading, it reads code twice. 
 * The first time, it processes assignment statements.
 * The second time, it will execute.
 *  
 */



