document.addEventListener(
  "DOMContentLoaded",
  () => {
    const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const width = 28; //28 x 28 = 784 squares
    const squares = [];
    const movespeed = 1;

    let pacmanCurrentIndex = 490;
    let score = 0;
    let pacman = document.getElementById("pacman");
    const layout = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
      1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
      1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
      1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
      2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
      2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
      1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
      0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
      1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    //Layout Legend:
    //0 = pellet
    //1 =  wall
    //2 = ghost lair
    //3 = power pellet
    //4 = empty

    //create the maze using the layout to assign classes to divs generated in for loop
    function createMaze() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);

        if (layout[i] == 0) {
          squares[i].classList.add("pellet");
          squares[i].classList.add("habitable");
        } else if (layout[i] === 1) {
          squares[i].classList.add("wall");
        } else if (layout[i] === 2) {
          squares[i].classList.add("lair");
        } else if (layout[i] === 3) {
          squares[i].classList.add("powerup");
          squares[i].classList.add("habitable");
        } else if (layout[i] === 4) {
          squares[i].classList.add("empty");
          squares[i].classList.add("habitable");
        }
      }
    }
    createMaze();

    //pacman starting position

    squares[pacmanCurrentIndex].id = "pacman";

    function checkForGameOver(squares) {
      for (let i = 0; i < squares.length; i++) {
        if (
          squares[i].classList.contains("pellet") ||
          squares[i].classList.contains("powerup")
        ) {
          return false;
        } else {
          return true;
        }
      }
    }
    //  while (!gameOver()) {
    // game loop

    function movePacman(e) {
      checkForGameOver();
      powerupEaten();
      pelletEaten();
      squares[pacmanCurrentIndex].id = "";
      switch (e.keyCode) {
        case 37: // GOING WEST
          rotation = "180deg";

          if (
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
            !squares[pacmanCurrentIndex - 1].classList.contains("lair") &&
            squares[pacmanCurrentIndex - 1].classList.contains("habitable")
          )
            if (
              squares[pacmanCurrentIndex - 1].classList.contains("habitable")
            ) {
              setTimeout((pacmanCurrentIndex -= 1), 5000);
            }
          if (squares[pacmanCurrentIndex - 1] === squares[363]) {
            pacmanCurrentIndex = 391;
          }
          break;

        case 38: // GOING NORTH
          rotation = "-90deg";
          if (
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
            !squares[pacmanCurrentIndex - width].classList.contains("lair") &&
            squares[pacmanCurrentIndex - width].classList.contains("habitable")
          )
            if (
              squares[pacmanCurrentIndex - width].classList.contains(
                "habitable"
              )
            ) {
              setTimeout((pacmanCurrentIndex -= width), 5000);
            }

          break;
        case 39: // GOING EAST
          rotation = "0deg";
          if (
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
            !squares[pacmanCurrentIndex + 1].classList.contains("lair") &&
            squares[pacmanCurrentIndex + 1].classList.contains("habitable")
          )
            if (
              squares[pacmanCurrentIndex + 1].classList.contains("habitable")
            ) {
              setTimeout((pacmanCurrentIndex += 1), 5000);
            }
          if (squares[pacmanCurrentIndex + 1] === squares[392]) {
            pacmanCurrentIndex = 364;
          }
          break;
        case 40: // GOING SOUTH
          rotation = "90deg";
          if (
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
            !squares[pacmanCurrentIndex + width].classList.contains("lair") &&
            squares[pacmanCurrentIndex + width].classList.contains("habitable")
          )
            if (
              squares[pacmanCurrentIndex + width].classList.contains(
                "habitable"
              )
            ) {
              setTimeout((pacmanCurrentIndex += width), 5000);
            }
          break;
      }
      squares[pacmanCurrentIndex].id = "pacman";
      document.getElementById("pacman").style.rotate = rotation;
      // switch (rotation) {
      //   case "0deg":
      //     pacmanCurrentIndex += 1;
      //   case "90deg":
      //     pacmanCurrentIndex += width;
      //   case "180deg":
      //     pacmanCurrentIndex -= 1;
      //   case "-90deg":
      //     pacmanCurrentIndex -= width;
      // }
    }

    function pelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("pellet")) {
        squares[pacmanCurrentIndex].id = "pacman";
        squares[pacmanCurrentIndex].classList.remove("pellet");
        score += 10;
        scoreDisplay.innerHTML = score;
      }
    }
    function powerupEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("powerup")) {
        squares[pacmanCurrentIndex].id = "pacman";
        squares[pacmanCurrentIndex].classList.remove("powerup");
        score += 50;
        scoreDisplay.innerHTML = score;
      }
    }
    //powerPelletEaten();
    //checkForGameOver();
    //checkForWin();

    document.addEventListener("keydown", (e) => {
      setTimeout(movePacman(e), 5000);
    });
  }
  //}
);
