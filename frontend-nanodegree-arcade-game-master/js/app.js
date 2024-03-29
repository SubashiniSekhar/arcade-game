// The Enemy

var Enemy = function (startX, startY, speed) {

  // Variables applied to each of our instances go here,
  // we've provided one for you to get started


  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images

  this.sprite = 'images/enemy-bug.png';
  this.x = startX;
  this.y = startY;
  this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  this.x = this.x + this.speed * dt;
  if (this.x > 500) {
    this.x = -100;
    this.enemySpeed();
  }

  this.checkCollision();
};


// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.enemySpeed = function () {
  this.speed = 60 * Math.floor(Math.random() * 4 + 1);
};

// Player Code
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//The Player

var Player = function () {

  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
  this.AtWall = {
    leftEnd: false,
    rightEnd: false,
    topEnd: false,
    bottomEnd: true
  };
};
Player.prototype.update = function () {
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyInput) {
  this.checkAndMovePlayer(keyInput);
};
/*
*If the player is pressing left arrow and he is not at the left wall, move him in left
* Repeat for all the directions
* */

Player.prototype.checkAndMovePlayer = function (direction) {
  var horizontalMove = 100;
  var verticalMove = 80;
  console.log("moving the player in " + direction);
  this.checkForWall();
  if (direction === 'left' && !this.AtWall.leftEnd) {
    this.x -= horizontalMove;
  }
  else if (direction === 'right' && !this.AtWall.rightEnd) {
    this.x += horizontalMove;
  }
  else if (direction === 'up' && !this.AtWall.topEnd) {
    this.y -= verticalMove;
  }
  else if (direction === 'down' && !this.AtWall.bottomEnd) {
    this.y += verticalMove;
  }
  else
    return null;
}
/*
* Check for the player's current position with respect to the walls
* */
Player.prototype.checkForWall = function () {
  if (this.x === 0) {
    this.AtWall.leftEnd = true;
  }
  else
    this.AtWall.leftEnd = false;
  if (this.x === 400) {
    this.AtWall.rightEnd = true;
  }
  else
    this.AtWall.rightEnd = false;
  if (this.y <= 40) {
    alert("Yay!! You won!!");
    this.AtWall.topEnd = true;
    this.resetPlayer();
  }
  else
    this.AtWall.topEnd = false;
  if (this.y === 400) {
    this.AtWall.bottomEnd = true;
  }
  else
    this.AtWall.bottomEnd = false;
}

Player.prototype.resetPlayer = function () {
  this.x = 200;
  this.y = 400;
};
/*
*Draw an imaginary box around bug.
* If the player's x axis is on left of bugboxleft and right of bugboxright, means the player is in middle of bugbox, ie.collided.
* */
Enemy.prototype.checkCollision = function () {
  var bugbox = {
    bugtop: this.y + 40,
    bugbottom: this.y - 40,
    bugleft: this.x - 50,
    bugright: this.x + 50
  }

  if (player.x > bugbox.bugleft && player.x < bugbox.bugright && player.y < bugbox.bugtop && player.y > bugbox.bugbottom) {
    alert("Noooo !!! You Lost :(");
    player.resetPlayer();

  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [];

for (var i = 0; i < 3; i++) {

  var bugspeed = Math.floor(Math.random() * 4 + 1) * 60;
  allEnemies.push(new Enemy(-80, 60 + 80 * i, bugspeed));
}

// Place the player object in a variable called player

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function (e) {

  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);

});
