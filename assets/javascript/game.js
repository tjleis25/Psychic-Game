 // Initial Variables
 
 var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
 // variables for tracking wins, losses, guesses left and the letters guessed
 
 var wins = 0; 
 
 var losses = 0; 
 
 var guessesLeft = 9; 
 
 var lettersGuessed = []; // array to push user choices to
 
 var computerGuess = [];  // array to push computer choices to
 
 
 // Functions
 //    =========================================================================
 window.onload = function() {
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerGuess.push(compGuess);
    
    // test in console.log
    console.log("Computer Pick: " + computerGuess[0]); 
} 

//*****Functions I tried an ultimately abandoned******/
// Function to update the wins...
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins; 
}

// Function to update the losses...
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " +
    losses; 
}

//Function to update remaining guesses...
function updateGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

// Function to update guesses so far...
//function updateLettersGuessed() {
//    document.querySelector("#letters-guessed").innerHTML = "Your Guesses So Far: " + lettersGuessed; 
//}


// Main PROCESS
//    ===========================================================================

// Calling functions to start the game. 
// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
// tested in console.log..console.log(document.onkeyup);
    
//determine which key was pressed, make it lowercase, and set it to the userGuess variable.
var userGuess = event.key.toLowerCase(); 
lettersGuessed.push(userGuess);

    
console.log(userGuess);   
    
// If user guesses the same letter as the computer, increase and update score, alert them they got it right.
if ((userGuess === computerGuess[0]) && (guessesLeft > 0)){
    alert ("You Win!"); 
    wins++; 
    guessesLeft = 9; 
    updateWins();
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
    
} 
    
else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft - 1; 
    updateGuessesLeft(); 
    

}

else {
    alert("You lose!");
    losses++;
    guessesLeft = 10; 
    updateLosses();
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}

//var html = "<p>Guess What Letter I'm Thinking Of</p>" +
//    "<p>Wins: " + wins + "</p>" +
//    "<p>Losses: " + losses + "</p>" +
//    "<p>Guesses left: " + guessesLeft + "</p>" +
//    "<p>Your guesses so far: " + lettersGuessed + "</p>";

//document.querySelector("#main").innerHTML = html; 


}

// else if (userPick !== computerPick) {
//     guessesLeft --; //decrements the guesses left
//     updateGuessesSoFar(); 
//  }
// If wrong, alert user he lost. 
//   else {
//       alert("You Lose!"); 
//        losses++; 
//        guessesLeft--; 
//        guessesSofar++; 
//        updateLosses(); 
//        updateGuesses(); 
//        updateGuessesSoFar(); 
//         reset();

// Decrement the guessesLeft variable, Increment the guessesSofar
//    guessesLeft--; 
//    guessesSofar++;  

//}
//  }    

//
