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

function gameWon() {

}

function cardClicked(clickedEvent) {

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

   const gameGrid = dpcument.getElementById('game-container');

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