sockets = []

require('net').createServer(socket => {
  sockets.push(socket)
  
  socket.on('data', data => { for (s of sockets) if (s !== socket) s.write(data) })
  socket.on('end', () => { sockets.splice(sockets.indexOf(socket), 1) })
  
}).listen(3000) && console.log('TCP chat server running. client: nc localhost 3000')
