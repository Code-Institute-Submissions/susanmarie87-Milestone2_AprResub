/*jshint esversion: 6 */

//card array
const cards = [
  'sacral',
  'thirdEye',
  'chakraTapestry',
  'chakraAngel',
  'heart',
  'solarPlexus',
  'throat',
  'root'
];

//variable for cards that are initially clicked. Once anothr card is clicked, it is chacked against this variable.
let currentCard = null;

//this is an array of strings that represent the names of the cards. If a card's name is in this array
//then the card has been matched.
let cardsMatched = [];

//Fisher-Yates Shuffle function
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//The GameWon function is called when the game has been won.
function gameWon() {
  //This element will hide the game section
  document.getElementById('main').style.display = 'none';

  //This element will hide the victory-screen section.
  document.getElementById('victory-screen').style.display = 'flex';

  //Setting the event listener for the play again button.
  document.getElementById('play-again-button').addEventListener('click', resetGame);
};

//Click event for card flips.
function cardClicked(clickEvent) {

  //This will create a reference to the actual card clicked on.
  const cardElementClicked = clickEvent.currentTarget;

  //That event is passed to this function which accesses the 
  //currentTarget to get element that is clicked during the event.
  const cardClicked = cardElementClicked.dataset.cardtype;

  //Adds flip class to the clicked card.
  cardElementClicked.classList.add('flip');

  //sets the current card to cardClicked if cardClicked is null
  if (currentCard) {

    //matchFound will be set to true if cardClicked is equal to 
    //currentCard.
    const matchFound = cardClicked === currentCard;

    //Adds matched cards to array of cardsMatched
    if (matchFound) {
      cardsMatched.push(cardClicked);
      //If cardsMatched is equal to cardsLength the array is complete and 
      //the game is over.
      if (cardsMatched.length === cards.length) {

        setTimeout(gameWon, 500);
      }

      // Reset.
      currentCard = null;
    } else {
      //setTimeout is used to delay the function for 500 milliseconds
      // so the user can process the image.
      setTimeout(() => {

        document
          .querySelectorAll(`[data-cardType="${currentCard}"]`)
          .forEach(card => card.classList.remove('flip'));

        //Remove flip class from the card that was just clicked.
        cardElementClicked.classList.remove('flip');

        // Reset.
        currentCard = null;
      }, 500);
    }
    //Reset.  
  } else {
    currentCard = cardClicked;
  }
};
//This function will reset the game when won
//Only called when the "PLay Again" button is clicked
function resetGame() {

  //Removes the flip class from all of the cards.
  document
    .querySelectorAll('.card')
    .forEach(card => card.classList.remove('flip'));

  // Shows the game section.
  document.getElementById('main').style.display = 'block';

  // Hides the victory screen section.
  document.getElementById('victory-screen').style.display = 'none';
}

//This function will render the game grid
function generateCardGrid() {
  // Spreading method used to combine the arrays so every card 
  // has a match.
  const completeCards = shuffle([...cards, ...cards]);

  // This iterates each array in the completeCards array
  // c will be equal to current item we are on.
  completeCards.forEach(c => {

    // div container element for card
    const container = document.createElement('div');
    // divs for the front and back of cards
    const front = document.createElement('div');
    const back = document.createElement('div');

    //creates the image element for the front and back of cards
    const frontImg = document.createElement('img');
    const backImg = document.createElement('img');

    //Sets the attributes for each element.
    // The container element gets the card class.
    container.classList.add('card');
    //data-cardType to the current card 
    container.dataset.cardtype = c;

    //Front and back of card class names.
    front.classList.add('card-face');
    front.classList.add('card-front');
    back.classList.add('card-face');
    back.classList.add('card-back');

    //Setting the image src's
    frontImg.src = `assets/images/${c}.jpg`;
    frontImg.classList.add('card-value');

    // The backs of all of the cards are the same.
    backImg.src = 'assets/images/Flamethrower.jpg';
    backImg.classList.add('back-image');

    //Grabs reference for the game grid
    const gameGrid = document.getElementById('game-container');
    //Stacks elements together and injects the current parent
    // into the HTML template.
    front.appendChild(frontImg);
    back.appendChild(backImg);
    container.appendChild(back);
    container.appendChild(front);
    gameGrid.appendChild(container);
  });
}

//This function is called when the scripts load and kick everything off.
function init() {

  //Generate card grid.
  generateCardGrid();

  //Grabs all elements with memory-card class and adds and event
  //listener to it. The callback is the cardClicked function.
  document
    .querySelectorAll('.card')
    .forEach(card => card.addEventListener('click', cardClicked));

  clearInterval(interval);
}

// Initialize the game.
init();