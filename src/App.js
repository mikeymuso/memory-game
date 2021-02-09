import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import getRandomCards from './hooks/getRandomCards';
import resetClicks from './hooks/resetClicks';
import './index.css';

const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [cardArray, setCardArray] = useState([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setCardArray(getRandomCards(setWin));
  }, [currentScore]);

  const handleCardClick = card => {
    if (card.clicked) {
      setGameOver(true);
      setHighScore(currentScore);
      setCurrentScore(0);
      resetClicks();
    } else {
      setCurrentScore(currentScore + 1);
      setGameOver(false);
      card.clicked = true;
    }
  };

  return (
    <>
      <Header
        highScore={highScore}
        currentScore={currentScore}
        gameOver={gameOver}
        win={win}
      />
      <main
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          margin: 'auto',
          backgroundColor: '#FFF4BA',
          padding: '40px 0',
          boxSizing: 'border-box',
        }}
      >
        {cardArray.map(card => (
          <Card key={card.id} card={card} handleCardClick={handleCardClick} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
