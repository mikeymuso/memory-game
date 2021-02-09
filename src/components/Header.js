import React from 'react';
import ScoreCard from './ScoreCard';
import Message from './Message';

const Header = ({ highScore, currentScore, gameOver, win }) => {
  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    backgroundColor: '#FFD800',
    padding: '10px',
    margin: 'auto',
  };

  return (
    <header>
      <div style={headerStyle}>
        <ScoreCard highScore={highScore} currentScore={currentScore} />
        {gameOver ? <Message text="Game Over, try again..." /> : null}
        {win ? <Message text="You win!!!" /> : null}
      </div>
      <Message
        text="EMOJI MEMORY GAME - Don't click the same card twice"
        style={{ margin: '10px 0', fontSize: '0.9em' }}
      />
    </header>
  );
};

export default Header;
