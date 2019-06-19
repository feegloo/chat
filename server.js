net = require("net");

sockets = [];

server = net.createServer(socket => {
  sockets.push(socket);

  socket.on("data", data => {
    for (s of sockets) {
      if (s !== socket) {
        s.write(data);
      }
    }
  });

  socket.on("end", () => {
    var i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });
});

server.listen(3000);
console.log("running TCP chat server on localhost:3000");
