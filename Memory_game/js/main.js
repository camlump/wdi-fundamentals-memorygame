
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
	}
}





function flipCard(cardId){

cardsInPlay.push(cards[cardId]);
	checkForMatch();
console.log("User Flipped " + cards[cardId]);

};

flipCard(0);
flipCard(2);








