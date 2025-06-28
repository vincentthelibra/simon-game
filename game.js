class SimonGame {
  constructor() {
    this.buttonColors = ["red", "blue", "green", "yellow"];
    this.reset();
    this.bindEvents();
  }

  reset() {
    this.gameStarted = false;
    this.gamePattern = [];
    this.userPattern = [];
    this.level = 0;
    this.gameOver = false;
  }

  updateDisplay() {
    const message = this.gameOver
      ? "Game Over, Press Any Key to Restart"
      : `Level ${this.level}`;
    $("h1").text(message);
  }

  generateNextSequence() {
    const randomIndex = Math.floor(Math.random() * this.buttonColors.length);
    const randomColor = this.buttonColors[randomIndex];

    this.gamePattern.push(randomColor);
    this.level++;

    this.animateButton(randomColor);
    this.playSound(randomColor);
    this.updateDisplay();
  }

  playSound(soundName) {
    try {
      const audio = new Audio(`./sounds/${soundName}.mp3`);
      audio.play().catch((error) => {
        console.warn(`Could not play sound: ${soundName}`, error);
      });
    } catch (error) {
      console.warn(`Audio error: ${soundName}`, error);
    }
  }

  animateButton(color) {
    const $button = $(`#${color}`);
    $button.fadeOut(100).fadeIn(100);
  }

  animatePress(color) {
    const $button = $(`#${color}`);
    $button.addClass("pressed");
    setTimeout(() => $button.removeClass("pressed"), 100);
  }

  animateGameOver() {
    $(document.body).addClass("game-over");
    setTimeout(() => $(document.body).removeClass("game-over"), 200);
  }

  handleUserInput(color) {
    this.userPattern.push(color);
    this.playSound(color);
    this.animatePress(color);

    // Check if user has completed the current sequence
    if (this.userPattern.length === this.gamePattern.length) {
      this.checkUserSequence();
    }
  }

  checkUserSequence() {
    const isCorrect =
      this.userPattern.length === this.gamePattern.length &&
      this.userPattern.every(
        (value, index) => value === this.gamePattern[index],
      );

    console.log("Game pattern:", this.gamePattern);
    console.log("User pattern:", this.userPattern);
    console.log(isCorrect ? "Success!" : "Failed!");

    if (isCorrect) {
      this.userPattern = [];
      setTimeout(() => this.generateNextSequence(), 1000);
    } else {
      this.handleGameOver();
    }
  }

  handleGameOver() {
    this.playSound("wrong");
    this.animateGameOver();
    this.gameOver = true;
    this.gameStarted = false;
    this.updateDisplay();
  }

  startGame() {
    if (this.gameOver) {
      this.reset();
    }

    if (!this.gameStarted) {
      this.gameStarted = true;
      this.generateNextSequence();
    }
  }

  bindEvents() {
    // Keyboard event for starting/restarting game
    $(document).on("keydown", (event) => {
      if (event.key === "a" || this.gameOver) {
        this.startGame();
      }
    });

    // Button click events
    $(".btn").on("click", (event) => {
      if (this.gameStarted && !this.gameOver) {
        const color = $(event.target).attr("id");
        this.handleUserInput(color);
      }
    });
  }
}

// Initialize the game
const simonGame = new SimonGame();
