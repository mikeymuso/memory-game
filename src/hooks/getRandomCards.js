import cards from '../data/cards';

// Fisher-Yates shuffle
const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const unclickedCards = () => {
  return cards.filter(card => card.clicked === false);
};

const getRandomCards = setWin => {
  let cardArray = [],
    unclickedArray;

  // Ensure there's always at least one unclicked card displayed
  unclickedArray = unclickedCards();

  console.log(unclickedArray);

  if (unclickedArray.length > 0) {
    cardArray.push(
      unclickedArray[Math.floor(Math.random() * unclickedArray.length)]
    );
  } else {
    setWin(true);
  }

  // Fill the remaining array randomly
  while (cardArray.length < 6) {
    let randInt = Math.floor(Math.random() * 8);
    let randCard = cards[randInt];

    if (!cardArray.includes(randCard)) {
      cardArray.push(randCard);
    }
  }

  return shuffleArray(cardArray);
};

export default getRandomCards;
