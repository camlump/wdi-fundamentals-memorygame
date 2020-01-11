
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";



let cards = [
{
	rank: "queen",

	suit: "hearts",

	cardImage: 'images/queen-of-hearts.png'

},

{
	rank: "queen",

	suit: "diamonds",

	cardImage: "images/queen-of-diamonds"

},

{
	rank: "king",

	suit: "hearts",

	cardImage: "images/king-of-hearts.png"

},

{
	rank: "king",

	suit: "diamonds",

	cardImage: 'images/king-of-diamonds.png'

}

];


const cardsInPlay = [];



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
	}



}





function flipCard(cardId) {

cardsInPlay.push(cards[cardId].rank);
cardsInPlay.push(cards[cardId].suit);
	

console.log("User Flipped " + cards[cardId].rank);
checkForMatch();


console.log(cards[cardId].cardImage);
console.log(cardsInPlay[cardId].suit);

}

flipCard(0);
flipCard(2);









