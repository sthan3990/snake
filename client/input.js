// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin (standard input)
const { stdin } = require(`process`);
const { randomMessage } = require(`./constants`);

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(`utf8`);
  stdin.resume();
  stdin.on(`data`, handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  switch (key) {

    // Handle CTRL+C User Input
    // \u0003 maps to ctrl+c input
    case `\u0003`:
      connection.write(`Exiting Program. Bye.`);
      process.exit();

    case `w`:
      connection.write(`Move: Up`);
      break;

    case `a`:
      connection.write(`Move LEFT`);
      break;

    case `f`:
      connection.write(`${randomMessage}`);
      break;

    case `s`:
      connection.write(`Move DOWN`);
      break;

    case `d`:
      connection.write(`Move RIGHT`);
      break;

    default:

      break;
  }

};

module.exports = { setupInput };