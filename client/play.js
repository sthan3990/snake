// import user made libs
const { setupInput } = require(`./input`);
const { connect } = require('./client');

// from the original fork
const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const game = new Game(new UserInterface())

console.log("Connecting ...");

setupInput(connect());

// Begin game
game.start()

