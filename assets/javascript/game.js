
var nickShow   = ["rugrats", "all that", "hey arnold", "kenan and kel", "rockos modern life", "ren and stimpy", "are you afraid of the dark", "doug", "double dare", "catdog", "the wild thornberrys", "aaahh real monsters", "angry beavers", "rocket power", "kablam", "oh yeah cartoons", ];
var pickedshow  = ""; 
var letters = [];
var numBlanks	= 0; 
var blanksAndSuccesses = []; 
var winCounter  = 0;
var lossCounter = 0;
var numGuesses  = 9;

function startGame() {	
	numGuesses = 9;
    pickedshow = nickShow[Math.floor(Math.random() * nickShow.length)]; 
	letters = pickedshow.split(""); 
	numBlanks = letters.length;  
	blanksAndSuccesses = []; 
	wrongGuesses = []; 
	for (var i=0; i <numBlanks; i++){
	blanksAndSuccesses.push("_");
    }
    document.getElementById("winner").style.cssText = "display: none";
    document.getElementById("loser").style.cssText = "display: none";
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");
	document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
	var letterInShow = false;
	for (var i=0; i<numBlanks; i++) {
		if(pickedshow[i] == letter) {
            letterInShow = true; 
        	}
	}
	if(letterInShow){ 
		for (var i=0; i<numBlanks; i++){
			if(pickedshow[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	else {
		wrongGuesses.push(letter);
		numGuesses--;
	}
}

function roundComplete(){
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); 
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");  
	if (letters.toString() == blanksAndSuccesses.toString()) {
		winCounter++; 
        document.getElementById("winner").style.cssText = "display: block"; 
        document.getElementById("winCounter").innerHTML= winCounter;
        alert("You win!");
		startGame();
	}
	else if(numGuesses == 0) {
		lossCounter++; 	  
        document.getElementById("loser").style.cssText = "display: block"; 
        document.getElementById("lossCounter").innerHTML= lossCounter; 
        alert("You lose!")
		startGame(); 
	}
}

startGame();

document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed); 
	roundComplete(); 
}
