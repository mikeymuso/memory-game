import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',
        padding: '12px',
        opacity: '0.5',
      }}
    >
      Created by{' '}
      <a href="http://www.mikecotton.co.uk" target="_blank" rel="noreferrer">
        Mike Cotton
      </a>{' '}
      as a project from The Odin Project
    </div>
  );
};

export default Footer;
