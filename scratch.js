setupBoard() {
  const $ul = $('<ul>');
  $ul.addClass("cf");
  for (let i = 0; i < 9; i++){

    let $li = $('<li>');
    $ul.append($li);
  }
  this.$el.append($ul);
}
