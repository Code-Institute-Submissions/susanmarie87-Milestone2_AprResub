//card array
const cards = [
  'sacral',
  'thirdEye',
  'chakraMan',
  'ladyChakra',
  'chakraTapestry',
  'chakraAngel',
  'heart',
  'solarPlexus',
  'throat',
  'root'
];

let currentCard = null;


let cardsMatched = [];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

   
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

   
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function gameWon() {
 
  document.getElementById('main').style.display = 'none';

  
  document.getElementById('victory-screen').style.display = 'flex';

  document.getElementById('play-again-button').addEventListener('click', resetGame);
};

function cardClicked (clickEvent) {
 
  const cardElementClicked = clickEvent.currentTarget;

 
  const cardClicked = cardElementClicked.dataset.cardtype;



  cardElementClicked.classList.add('flip');

  
  if (currentCard) {
    
    const matchFound = cardClicked === currentCard;

   
    if (matchFound) {
      cardsMatched.push(cardClicked);

      
      if (cardsMatched.length === cards.length) {
       
        setTimeout(gameWon, 500);
      }

      // Reset.
      currentCard = null;
    } else {
      
      setTimeout(() => {
       
        document
          .querySelectorAll(`[data-cardType="${currentCard}"]`)
          .forEach(card => card.classList.remove('flip'));

        
        cardElementClicked.classList.remove('flip');

        // Reset.
        currentCard = null;
      }, 500);
    }

    
    
  } else {
    currentCard = cardClicked;
  }
};


function resetGame() {

  document
    .querySelectorAll('.card')
    .forEach(card => card.classList.remove('flip'));

  // Show the game section.
  document.getElementById('main').style.display = 'block';

  // Hide the victory screen section.
  document.getElementById('victory-screen').style.display = 'none';
}


function generateCardGrid() {
  
  const completeCards = shuffle([...cards, ...cards]);

  
  completeCards.forEach(c => {

    
    const container = document.createElement('div');

   
    const front = document.createElement('div');
    const back = document.createElement('div');


    const frontImg = document.createElement('img');
    const backImg = document.createElement('img');



    container.classList.add('card');

 
    container.dataset.cardtype = c;

   
    front.classList.add('card-face');
    front.classList.add('card-front');
    back.classList.add('card-face');
    back.classList.add('card-back');


    frontImg.src = `/assets/images/${c}.jpg`;
    frontImg.classList.add('card-value');

    // The backs of all of the cards are the same.
    backImg.src = '/assets/images/Flamethrower.jpg';
    backImg.classList.add('back-image');

  
    const gameGrid = document.getElementById('game-container');

    front.appendChild(frontImg);
    back.appendChild(backImg);
    container.appendChild(back);
    container.appendChild(front);
    gameGrid.appendChild(container);
  });
};


function init () {
  
  generateCardGrid();

  document
    .querySelectorAll('.card')
    .forEach(card => card.addEventListener('click', cardClicked));
};

// Initialize the game.
init();
