import React from 'react';

const Card = ({ card, handleCardClick }) => {
  const style = {
    width: '150px',
    height: '200px',
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'white',
    boxShadow: '1px 1px 3px orange',
  };

  console.log(card);

  return (
    <div onClick={() => handleCardClick(card)} style={style}>
      <div style={{ width: '80%', margin: 'auto' }}>
        <img style={{ width: '100%' }} src={card.image} alt={card.alt}></img>
      </div>
      <h2 style={{ textAlign: 'center', margin: '0' }}>{card.text}</h2>
    </div>
  );
};

export default Card;
