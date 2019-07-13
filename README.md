# arcade-game

The classic arcade game is a one player game, where the player has to reach the end of the field crossing obstacles , here running bugs to win the game. The player cannot cross the borders of the game and cannot collide with the bugs. 

The game is written in Javascript using the game engine provided by Udacity. The bugs and the players are rendered using Javascript constructor function. The game code places the characters in the appropriate places. From there, the player uses the arrow keys to move his character in the game board avoiding the bugs to reach the end. The key input by the users are interepreted in JS to make sure that the player does not cross the borders.
When the game is loaded , the entities namely the player and the bugs and the backdrop are rendered on the screen. When the user uses the arrow keys, its checked whether the player is at the wall or not and he is allowed to move accordingly. Whent he palyer collides with one of enemies, he loses and is reset to the original position. When he finally reaches the end, he is alerted of the game win.

Steps to play the game :

1. Load the index.html in a modern browser

2. Use arrow keys to move the character into desired direction.

3. Aim to avoid collision with enemy bugs and reach water.
