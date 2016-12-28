const Game = require("./game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (event) => {
      const $currentSquare = $(event.currentTarget);
      const pos = $currentSquare.data("pos");
      const currentPlayer = this.game.currentPlayer;
      try {
        this.game.playMove([pos[0], pos[2]]);
      } catch(e) {
        alert("Invalid move!");
        return;
      }
      $currentSquare.addClass(currentPlayer);

      if (this.game.isOver()) {
        const $p = $('<p>');
        this.$el.append($p);
        this.$el.off("click");
        if (this.game.winner()) {
          this.$el.addClass(`winner-${currentPlayer}`);
          $p.text(`You win, ${currentPlayer}!`);
        } else {
          $p.text('It\'s a draw!');
        }
      }
    });
  }

  setupBoard() {
    const $ul = $('<ul>');
    $ul.addClass("cf");
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++) {
        let $li = $('<li>');
        $li.attr("data-pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
