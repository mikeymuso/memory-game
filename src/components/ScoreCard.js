import React from 'react';

const ScoreCard = ({ highScore, currentScore }) => {
  return (
    <div style={{ width: '50vw', fontSize: '1.1em' }}>
      <div>
        High Score: <span>{highScore}</span>
      </div>
      <div>
        Current Score: <span>{currentScore}</span>
      </div>
    </div>
  );
};

export default ScoreCard;
