import cards from '../data/cards';

const unclickedCards = () => {
  return cards.filter(card => card.clicked === false);
};

const getRandomCards = setWin => {
  let cardArray = [];

  // Ensure there's always at least one unclicked card displayed
  let unclickedArray = unclickedCards();
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

    console.log(randInt);

    if (!cardArray.includes(randCard)) {
      cardArray.push(randCard);
    }
  }

  return cardArray;
};

export default getRandomCards;
