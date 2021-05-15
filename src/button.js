import React from 'react';
import './button.css';


const Button = ( {returnToMenu} ) => {
  return (
    <div className='button-container'>
      <button className='return-btn' onClick={returnToMenu}>Return to main menu</button>
    </div>
  )
}

export default Button;
