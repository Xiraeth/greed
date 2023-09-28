# This is an attempt at a dice game similar to Greed/Farkle/Cosmic Wimpout/Hot Dice/Zilch/Zonk. The rules are:  
Number of players: 2 or more (up to 5)  
The game is played with five six-sided dice.  
First player to reach a predetermined amount of points wins.  
Every player rolls a dice in the beginning to determine who goes first.  

First turn: player rolls all five dice. Look for:  
- 5's and 1's. 1's award the player 100 points while 5's give 50 points.  
- 3x the same roll. Having 3 of the same dice awards the player points equal to that dice x 100. Rolling three 1's gives 1000 points instead of 300.  
- 4x the same roll. Same as triplets, but the amount of points given is twice as large.  
- 5x the same roll. Same as above, but the amount of points given is thrice as large.  
![image](https://github.com/Xiraeth/greed/assets/77112995/ae742c8c-ebd4-4368-a751-15c2d112fb3a)  
Some special rolls are:  
- Rolling 1-5 (1,2,3,4,5) or 2-6 awards the player 750 points.
- Rolling 1-6 gives 1500 points.
After rolling once, the player may keep all or some of the dice that award points (1's, 5's or any of the combinations mentioned above).
After the player decides which dice to keep, the points are temporarily added to their score (we'll call this the current score). The player then keep rolling dice, until one of two things happen:
- If no point-giving dice are rolled, the player's current score is set to 0, their turn ends and it's on to the next player.
- If the player keeps rolling until there is no dice left on the table, they may pick all 6 up again and start over, **without** resetting their current score. This way they can keep increasing their current score as much as their luck allows them.


The player can choose whenever they want to end their turn, adding their current score into their game score.
If that move puts them at or above the specified point threshold required to win, they are crowned winner and the game ends.
