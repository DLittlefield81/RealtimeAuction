import React from 'react'
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

const App = () => {
  return (
    <div>Hello World</div>
  )
}

export default App