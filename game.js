var gameStart = false;
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var gameOver = false;

function setGameLevel(level) {
  $("h1").text(`Level ${level}`);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random(4) * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level++;
  setGameLevel(level);
}

function playSound(audioName) {
  var audio = new Audio(`./sounds/${audioName}.mp3`);
  audio.play();
}

function animatedPress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
  gameOver = true;
}

function checkAnswer(currentLevel) {
  console.log(gamePattern);
  console.log(userClickedPattern);
  if (JSON.stringify(userClickedPattern) == JSON.stringify(gamePattern)) {
    console.log("success");
    setTimeout(() => {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  } else {
    console.log("fail");
    playSound("wrong");
    $(document.body).addClass("game-over");
    setTimeout(() => {
      $(document.body).removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

$(document).keydown(function (event) {
  if (gameStart === false) {
    if (gameOver === false) {
      if (event.key === "a") {
        gameStart = true;
        nextSequence();
      }
    } else {
      gameStart = true;
      nextSequence();
    }
  }
});

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatedPress(userChosenColour);
  if (userClickedPattern.length === gamePattern.length) {
    checkAnswer(level);
  }
});
