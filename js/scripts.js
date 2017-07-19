//business logic

function roll() {
  return Math.floor(Math.random() * 6) + 1; //The maximum is inclusive and the minimum is inclusive
}

function Player(playerName, turnScore, totalScore, currentRoll) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.currentRoll = currentRoll;
}

Player.prototype.turnTotal = function(){
  if (this.currentRoll === 1) {
    this.turnScore = 0;
  } else {
  this.turnScore += this.currentRoll;
  }
}

Player.prototype.hold = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  if (this.totalScore >= 100) {
    $(".pig").show();
    $("#win").text(this.playerName + " WINS!");
  }
}

function reset(){
  $(".turn-total").text(" ");
  $(".turn-total-two").text(" ");
  $(".dice-one").text(" ");
  $(".dice-two").text(" ");
  $(".score-total").text(" ");
  $(".score-total-two").text(" ");
  $("#win").hide();
}

var player1 = new Player("Player 1", 0, 0, 0);
var player2 = new Player("Player 2", 0, 0, 0);

$(function() {
  $("#player-one-roll").submit(function(event) {
    event.preventDefault();

    player1.currentRoll = roll();
    player1.turnTotal();

    $(".dice-one").text(player1.currentRoll);
    $(".turn-total").text(player1.turnScore);
  });

  $("#player-one-hold").submit(function(event) {
    event.preventDefault();

    player1.hold();

    $(".score-total").text(player1.totalScore);
    $(".dice-one").text(" ");
    $(".turn-total").text(" ");
  });
});

$(function() {
  $("#player-two-roll").submit(function(event) {
    event.preventDefault();

    player2.currentRoll = roll();
    player2.turnTotal();

    $(".dice-two").text(player2.currentRoll);
    $(".turn-total-two").text(player2.turnScore);
  });

  $("#player-two-hold").submit(function(event) {
    event.preventDefault();

    player2.hold();

    $(".score-total-two").text(player2.totalScore);
    $(".dice-two").text(" ");
    $(".turn-total-two").text(" ");
  });

  $("#play-again").submit(function(event) {
    event.preventDefault();

    reset();
  });
});
