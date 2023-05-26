
const net = require(`net`);

const { ipPort } = require(`./constants`);

const server = net.createServer();

server.on(`connection`, (socket) => {

  console.log(`new client connection is made ${socket.remoteAddress} : ${socket.remotePort}`);

  socket.setEncoding(`utf8`); // interpret data as text

  socket.on(`data`, (data) => {
    console.log(`Message from client: `, data);
  });

  socket.once(`close`, () => {
    console.log(`client connection closed.`);
  });

});

server.listen(ipPort, () => {
  console.log(`Server listening on port ${ipPort}`);
});
