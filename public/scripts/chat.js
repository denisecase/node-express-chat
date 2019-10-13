import { createName } from './namer.js'

const socket = io()
const ENTER_KEY_CODE = 13

// on load, store this user name in the hidden field
// configure event listener for button click
// configure event listener for key up (if ENTER, then submit message)
// emit a chatMessage event to the system telling who joined 
window.addEventListener('load', () => {
  const tag = createName()
  $('#user').val(tag);
  document.querySelector("#button").addEventListener('click', submitfunction)
  document.querySelector("#m").addEventListener('keyup', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) { submitfunction() }
    socket.emit('notifyUser', tag)
  })
  socket.emit('chatMessage', 'System', `<b>${tag}</b> has joined the discussion`);
})

/**
* @desc Logic after message is submitted 
* lookup my name in the hidden field
* lookup the message in the input field
* if message isn't empty, emit a chatMessage event with from and message
* reset input value to empty string and
* focus on the message box again
* @param string $msg - the message to be displayed
* @return bool - refresh the page or not
*/
const submitfunction = () => {
  const from = $('#user').val()
  const message = $('#m').val()
  if (message !== '') { socket.emit('chatMessage', from, message) }
  $('#m').val('').focus()
}

/**
* @desc Logic after getting chatMessage event.
* Read my name from hidden field. 
* Is it from me? 
* If so, color it green, otherwise, blue.
* If me, instead of name, label message from "Me"
* Add the new message as a list item to the page
* @param string $from - the user who typed the message
* @param string $msg - the message to be displayed
*/
socket.on('chatMessage', (from, msg) => {
  const me = $('#user').val()
  const isFromMe = (from === me)
  const color = isFromMe ? 'green' : '#009afd'
  from = isFromMe ? 'Me' : from
  $('#messages').append(`<li><b style="color:${color}"> ${from}</b>: ${msg}</li>`)
})

/**
* @desc Logic after getting notifyUser event - display time-limited notification to others
* @param string $user - the user typing
*/
socket.on('notifyUser', user => {
  const myName = $('#user').val()
  if (user !== myName) { $('#notifyUser').text(`${user} is typing ...`) }
  const timeout_millisecs = 2000
  setTimeout(() => { $('#notifyUser').text('') }, timeout_millisecs)
})

/**
 * 
 * In JS, you can call functions defined AFTER the calling function.
 *
 * This is due to JavaScript 'hoisting'.
 * On loading, it reads code twice.
 * The first time, it processes assignment statements.
 * The second time, it executes.
 *
 * Code in 'document ready' or 'DOMContentLoaded' runs when
 * DOM is ready for JavaScript code to execute.
 * Code in 'window load' runs when
 * entire page (images, iframes), not just the DOM, is ready.
 *
 */



