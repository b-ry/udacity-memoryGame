
/*
 * Create a list that holds all of your cards
 */


 /* List of card class names*/
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
  const fragment = document.createDocumentFragment();
  card.classList.add('card');
  const markup = `<i class="icon ${array}"></i>`;
  card.innerHTML = markup;
  fragment.appendChild(card);
  deck.appendChild(fragment);
}

function generateCards() {
  for(let i = 0; i < 2; i++) {
    array = shuffle(array);
    array.forEach(createCard);
  }
}

generateCards()

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

const el = document.getElementsByClassName('card');
const elToggle = document.getElementsByTagName('li')[0];

for(let i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function() {
    if (elToggle.classList.contains('open')) {
      elToggle.classList.remove('open');
    } else {
      elToggle.classList.add('open');
    }
  });
  cardsOpened.push(el[i]);
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
