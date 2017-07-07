// Initialize variables


const squares = document.getElementsByClassName('square');

let wrapper =document.getElementsByClassName('wrapper');

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

let tieText = itsATie.innerHTML;

let tieNumber = parseInt(itsATie.innerHTML);


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

let rows = [right, middle, left, horTop, horMiddle, horBottom, diagonalLeft, diagonalRight]





function init() {

	// On button click initialize game / reset everything

	clickCounter = 0;

	whichPlayer = 1;

	// msg.textContent = whichPlayer;

	win = false;

	logGameStatus()

	stopMusic(victory)
	 
	reset(squares, player1Turn, player2Turn)

	playersClickedOn(squares);




}

function logGameStatus() {


	console.clear();

	buttonMsg.innerHTML = 'New Game'

	gameStatus = 'Game is on';

	console.log(gameStatus);


}

function stopMusic(vic) {

	vic.pause();
	vic.currentTime = 0;

}

function reset(target, added, removed) {


	 added.classList.add('playing')

	 removed.classList.remove('playing')


	for (var i = 0; i < target.length; i++) { 

		target[i].innerHTML = '';

	}

}




function playersClickedOn(targetSquare) {

	// add click listener to grid, check who's playing 

	for (var i = 0; i < targetSquare.length; i++) {

		 targetSquare[i].addEventListener('click', function() 

		 { 

		 	if (this.innerHTML == playerX || this.innerHTML == playerO) {

				return false;		// disable click on square if already used		

		 	}
			
			  else if (whichPlayer == 1) {

					this.innerHTML= playerX;
					

			} else {


					this.innerHTML= playerO;


					}; 


			        playerTurn(squares, toggleClass)

		 })

	}

	
}

function toggleClass(player1, player2) {


			player1.classList.toggle('playing')

			player2.classList.toggle('playing')


		}




		function playerTurn(target, toggleFunc) {

			// highlight buttons for visual feedback by calling toggleClass function

			toggleFunc(player1Turn, player2Turn)

			for (var i = 0; i < target.length; i++) 


				{

					if(whichPlayer == 1 ) {

						whichPlayer = 2

					} else {

						whichPlayer = 1
					}


				} 


			 countClicks()

		}


		function countClicks() {

		// Only after players have clicked 5 times start checking if game is over

			clickCounter++

			if (clickCounter > 4) {

				gameStatus = 'Checking who is winning'

				gameOver()

			
			}

		}



	// let check = function (row) 

	// 				{

	// 					let xCounter = 0 ; // declare variables within function to keep the block scope

	// 					let oCounter = 0 ;

	// 				  setTimeout(function() {  // set timeout for browser to keep up in real time

	// 					for (var i = 0; i < row.length; i++) 


	// 						{
	// 						// add class to keep track for the strike through line ?

	// 						  if (row[i].innerHTML == playerX) 

	// 						  	  {
	// 									xCounter++;

										
	// 							  } else  if (row[i].innerHTML == playerO) {

	// 									oCounter++;

	// 							  }

																
	// 						}

	// 						isWinner(xCounter, oCounter) // call isWinner within setTimeout to count in real time
	
					
	// 										}, 0)


	// 				}  


		let checks = (targetRow) => { 

			targetRow.forEach((row) => {


						let xCounter = 0 ; // declare variables within function to keep the block scope for every row

						let oCounter = 0 ;

						let tieCounter = 0;

					  setTimeout(() => {  // set timeout for browser to keep up in real time

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



		}) 

	}			


function isWinner(counterX, counterO) {


	ties = 0;



	if(counterX == 3 || counterO == 3) {


		keepScore()	

		win = true

		toggleClass(player1Turn, player2Turn)

		victory.play()
		
		buttonMsg.innerHTML = 'Play again ?'

		
	
	} else if (clickCounter === 9 && win === false ) {

		console.log('here')


     	buttonMsg.innerHTML = 'Tie !Play again ?'


	     	ties++

	     	tieNumber += ties

	     	console.log(tieNumber)


		    itsATie.innerHTML = ties


	}


}




function keepScore() {

			if(whichPlayer == 2) {

				winner1++
				player1Wins.innerHTML = winner1

			} else {

				whichPlayer = 2
				winner2++
				player2Wins.innerHTML = winner2
			}

}


function gameOver() {

	checks(rows);

// console.log(gameStatus);

 //    check(right)
 //    check(middle)
 //    check(left)
 //    check(horTop)
 //    check(horMiddle)
 //    check(horBottom)
 //    check(diagonalLeft)
 //    check(diagonalRight)

}
