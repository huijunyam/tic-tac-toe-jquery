const View = require("./ttt-view.js");
const Game = require("./game.js");

$( () => {
  // Your code here
  let $view = $(".ttt");
  let game = new Game();
  new View(game, $view);
});
