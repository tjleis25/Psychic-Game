// Initial Variables
 
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
// variables for tracking wins, losses, guesses left and the letters guessed

var wins = 0; 

var losses = 0; 

var guessesLeft = 9; 

var guessesSoFar = []; // array to push user choices to

var userGuess = null; 

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// test in console.log
console.log("Computer Pick: " + computerGuess);
   

// Main PROCESS
//    ===========================================================================

// Calling functions to start the game. 
document.onkeyup = function(event) {

// When user presses a key, it records it and saves to userGuess
var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

// If user guesses the same letter as the computer, increase and update score, alert them they got it right.
if (userGuess === computerGuess) {
   alert ("You Win!"); 
   wins++; 
   guessesLeft = 9; 
   guessesSoFar = [];
   computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
   console.log("Computer Pick: " + computerGuess);
     
} 

// Add the user's guess to guessesSoFar array but only if it wasn't alreaedy previously picked by the user. Also make sure that the character user picks is within the alphabet, and not any non-usable character

else if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length] = userGuess; 

    // If it is a new letter then decrease the remaining guesses by 1
    guessesLeft--;
}

// If guessesLeft gets to 0 then record it as a loss
// And then reset guessesLeft to 9, and empty the guessesSoFar array
// also have the computer make a new random pick

if (guessesLeft == 0) {
   alert("You lose!");
   losses++;
   guessesLeft = 9; 
   guessesSoFar = []; 
   computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
   console.log("Computer Pick: " + computerGuess);
}

// Changes to HTML
var html = "<h1>The Psychic Game</h1>" + "<h2>Guess What Letter I'm Thinking Of:</h2>" + "<h3>Wins: " + wins + " </h3>" + "<h4>Losses: " + losses + " <h4>" + "<h5>Guesses Left: " + guessesLeft + " </h5>" + "<h6>Your Guesses So Far: " + guessesSoFar + "<h6>";

// place HTML into the game ID
document.querySelector("#main").innerHTML = html; 
}