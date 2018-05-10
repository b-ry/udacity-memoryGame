/*
 * Create a list that holds all of your cards
 */
let array = [
  "icon-pushpin",
  "icon-wrench",
  "icon-magic-wand",
  "icon-trophy",
  "icon-gift",
  "icon-rocket",
  "icon-fire",
  "icon-airplane"
];

/* Creates a card in the DOM*/
function createCard(array) {
  const deck = document.querySelector('.deck');
  const card = document.createElement('li');
  const cardItem = document.createElement('i');
  const fragment = document.createDocumentFragment();

  card.setAttribute('class', 'card');
  cardItem.setAttribute('class', `icon ${array}`);

  card.appendChild(cardItem);

  fragment.appendChild(card);
  deck.appendChild(fragment);
}

function generateCards() {
  for(let i = 0; i < 2; i++) {
    array = shuffle(array);
    array.forEach(createCard);
  }
}

generateCards();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Array to keep track of cards opened.
cardsOpened = [];


// Adding event listener 
const allCards = document.querySelectorAll('li');


for(let i = 0 ; i < allCards.length; i++) {
  allCards[i].addEventListener('click', function() {
    console.log('click');
  });
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
