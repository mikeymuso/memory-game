import React from 'react';

const Message = ({ text, style }) => {
  const defaultStyle = {
    ...style,
    display: 'grid',
    alignContent: 'center',
  };

  return (
    <div style={defaultStyle}>
      <h3 style={{ margin: '0', paddingLeft: '10px' }}>{text}</h3>
    </div>
  );
};

export default Message;
