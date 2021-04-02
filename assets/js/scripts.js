//card array
const cards =[
    'sacral',
    'thirdEye',
    'chakraMan',
    'ladyChakra',
    'chakraTapestry',
    'chakraAngel',
    'heart',
    'solarPlexus',
    'throat',
    'root',
];

let currentCard= null;


let cardsMatched= []; 

function shuffle(array) {
  var currentIndex =array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
      //remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

//function called when game is won
function gameWon() {
//Hides game section
document.getElementById('main').style.display = 'none';

//shows vicotry screen
document.getElementById('victory-screen').style.display ='flex';

//sets event listener for play again button
document.getElementById('play-again-button').addEventListener('click', resetGame);
};

function cardClicked(clickEvent) {
//reference for element clicked on
    const cardElementClicked = clickEvent.currentTarget;

    const cardClicked = cardElementClicked.dataset.cardType;

    //Adding flip class to clicked card
    cardElementClicked.classList.add('flip');

    //Is there a match?
    if (currentcard) {

        const(matchFound) = cardClicked ===currentcard;

     if (matchFound) {
        cardsMatched.push(cardClicked);

    //if cards matched is equal to card length, the game is over

    if (cardsMatched.length === cards.length) {
         //set Timeout
        setTimeout(gameWon, 500);

        //reset

        currentCard = null;
      } else {
          setTimeout(() => {
            
         document
         .querySelectorAll(`[data-cardType="${currentCard}"]`)
         .forEach(card => card.classList.remove('flip'));   

         //remove flip class from clicked card

         cardElementClicked.classList.remove('flip');
         
         //reset
         currentCard = null;
          }, 500);
      }
      //reset
     } else {
         currentCard = cardClicked;
   }
            
  }
 }

function resetGame() {

}

//rendering card grid
function generateCardGrid() {
    //spreading cards
   const completeCards = shuffle([...cards, ...cards]);
   
   completeCards.foreach(c => {
//cards container
   const container= document.createElement('div');
   const back=document.createElement('div');

   //images container
   const frontImg = document.createElement('img');
   const backImg= document.createElement('img');
   
   //setting attributes for elements
   container.classList.add('card');
   container.dataset.cardtype = c;

   //Front and back class names
   front.classList.add('card-face');
   front.classList.add('card-front');
   back.classList.add('card-face');
   back.classList.add('card-back');

   //setting img source
   frontImg.src = `/assets/images/${c}.jpg`;
   frontImg.classList.add('card-value');

   //back img source
   backImg.src = 'assets/images/flamethrower.jpg';
   backImg.classList.add('back-image');

   const gameGrid = document.getElementById('game-container');

   front.appendChild(frontImg);
   back.appendChild(backImg);
   container.appendChild(back);
   container.appendChild(front);
   gameGrid.appendChild(container);
});
};

function init() {

     generateCardGrid();

     document.querySelectorAll('.card')
     .forEach(card => card.addEventListener('click', cardClicked));
};
init();