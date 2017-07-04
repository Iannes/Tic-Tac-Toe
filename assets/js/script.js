// Initialize variables


const squares = document.getElementsByClassName('square');

let button = document.getElementsByClassName('btn'); 

let msg = document.getElementById('message');

let buttonMsg = document.getElementById('btn__msg');

let grid = document.getElementsByClassName('grid');

let topRow = document.getElementsByClassName('top__row');

let left = document.getElementsByClassName('left');

let middle = document.getElementsByClassName('middle');

let right = document.getElementsByClassName('right');

let horTop = document.getElementsByClassName('horizontal__top');

let horMiddle = document.getElementsByClassName('horizontal__middle');

let horBottom = document.getElementsByClassName('horizontal__bottom');

let diagonalLeft = document.getElementsByClassName('diagonal__left');

let diagonalRight = document.getElementsByClassName('diagonal__right');

let player1Wins = document.getElementById('player1');

let player2Wins = document.getElementById('player2');

let itsATie = document.getElementById('tie');

let victorySound = document.getElementById('victory');

let player1Turn = document.getElementById('activePlayer1');

let player2Turn = document.getElementById('activePlayer2');






let playerX = "X";
let playerO = "O";

let winner1 = 0;
let winner2 = 0;
let ties = 0;


let clickCounter = 0;

let gameStatus = "";

let whichPlayer = "";

let win = false;





function init() {

	// On button click initialize game / reset everything

	console.clear();

	win = false;

	logGameStatus()


	 whichPlayer = 1;

	 msg.textContent = whichPlayer;


	stopMusic(victory)
	 
	reset(squares, clickCounter, player1Turn, player2Turn)

	playersClickedOn(squares);




}

function logGameStatus() {

	buttonMsg.innerHTML = 'New Game'

	 gameStatus = 'Game is on';

	 console.log(gameStatus);



}

function stopMusic(vic) {

	vic.pause();
	vic.currentTime = 0;

}

function reset(target, counter, added, removed) {

	counter = 0;


	 added.classList.add('playing')

	 removed.classList.remove('playing')


	for (var i = 0; i < target.length; i++) { 

		target[i].innerHTML = '';

	}

}




function playersClickedOn(target) {

	// add click listener to grid, check who's playing 

	for (var i = 0; i < target.length; i++) {

		 target[i].addEventListener('click', function() 

		 { 

		 	if (this.innerHTML == playerX || this.innerHTML == playerO) {

				return false;		// disable click on square if already used		

		 	}
			
			  else if (whichPlayer == 1) {

					this.innerHTML= playerX;
					

			} else {


					this.innerHTML= playerO;


					}; 


			        playerTurn(squares)

		 })

	}

	
}

function toggleClass(player1, player2) {


			player1.classList.toggle('playing')

			player2.classList.toggle('playing')


		}




		function playerTurn(target) {

			// highlight buttons for visual feedback

			toggleClass(player1Turn, player2Turn)

			for (var i = 0; i < target.length; i++) 


				{

					if(whichPlayer == 1 ) {

						whichPlayer = 2

					} else {

						whichPlayer = 1
					}


				} 

			msg.textContent = whichPlayer;


			 countClicks()

		}


		function countClicks() {

		// Only after players have clicked 5 times start checking if game is over and who is winning

			clickCounter++

			if (clickCounter > 4) {

				gameOver()

			
			}

		}



	let check = function (row) 

					{

						let xCounter = 0 ; // declare variables within function to keep the block scope

						let oCounter = 0 ;

					  setTimeout(function() {  // set timeout for browser to keep up in real time

						for (var i = 0; i < row.length; i++) 


							{
							// add class to keep track for the strike through line ?

							  if (row[i].innerHTML == playerX) 

							  	  {
										xCounter++;
										
								  } else  if (row[i].innerHTML == playerO) {

										oCounter++;

								  }

																
							}

							isWinner(xCounter, oCounter) // call isWinner within setTimeout to count in real time
	
					
											}, 0)


					}  


function isWinner(counterX, counterO) {

	if(counterX == 3 || counterO == 3) {

		keepScore()	

		win = true

		toggleClass(player1Turn, player2Turn)

		victory.play()
		
		buttonMsg.innerHTML = 'Play again ?'
	
	} else if (clickCounter === 9 && win === false) {

		console.log('here')

     	buttonMsg.innerHTML = 'Tie !Play again ?'

	}


}


function keepScore() {

			if(whichPlayer == 2) {

				msg.innerHTML = whichPlayer
				winner1++
				player1Wins.innerHTML = winner1

			} else {

				whichPlayer = 2
				msg.innerHTML = whichPlayer
				winner2++
				player2Wins.innerHTML = winner2
			}

}


function gameOver() {

	gameStatus = 'Checking who is winning'

	// console.log(gameStatus);

	check(right)
    check(middle)
    check(left)
    check(horTop)
    check(horMiddle)
    check(horBottom)
    check(diagonalLeft)
    check(diagonalRight)


}