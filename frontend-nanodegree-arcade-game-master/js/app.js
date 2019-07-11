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

Player.prototype.checkAndMovePlayer = function (direction) {
  var horizontalMove = 100;
  var verticalMove = 80;
  console.log("mvoing the player in " + direction);
  this.checkForWall();
  if (this.AtWall.bottomEnd && direction === "down" ||
    this.AtWall.leftEnd && direction === "left" ||
    this.AtWall.rightEnd && direction === "right" ||
    this.AtWall.topEnd && direction == "up") {
    return null;
  }

  else {
    if (direction === 'left')
      this.x -= horizontalMove;
    else if (direction === 'right')
      this.x += horizontalMove;
    else if (direction === 'up')
      this.y -= verticalMove;
    else if (direction === 'down')
      this.y += verticalMove;
  }
}
Player.prototype.checkForWall = function () {
  if (this.x == 0)
    this.AtWall.leftEnd = true;
  else if (this.x == 400)
    this.AtWall.rightEnd = true;
  else if (this.y == 40) {
    alert("Yay!! You won!!");
    this.AtWall.topEnd = true;
  }
  else if (this.y == 400)
    this.AtWall.bottomEnd = true;
}

Player.prototype.resetPlayer = function () {
  this.x = 200;
  this.y = 400;
};

Player.prototype.checkCollision = function(){

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
