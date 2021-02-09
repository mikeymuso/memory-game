import Cards from '../data/cards';

const resetClicks = () => {
  Cards.forEach(card => (card.clicked = false));
};

export default resetClicks;
