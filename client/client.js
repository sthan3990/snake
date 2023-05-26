const net = require("net");

const { ipAddress, ipPort, userName } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ipAddress,// IP address here,
    port: ipPort // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {

    conn.write(`Name: ${userName}`);

  });

  //event handler that receives data from the server to the client
  conn.on('data', (data) => {
    console.log('Server says: ', data)
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
