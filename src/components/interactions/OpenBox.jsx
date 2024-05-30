import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';

import '../../styles/OpenBox.css';
import '../../styles/Extra.css';

import Toolbox from '../../toolbox/Global'
import CardCanvas from './CardCanvas'

function openBox({ item, onClose }) {

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="open_box_container">
      <div className="vitrine_blur" onClick={handleBackdropClick}>
      </div>
      <div className="bottom_box"></div>

      <div className="cards">
        <CardCanvas 
          item=""
          position="left"
          rarity="c"
        />
        <div className="card card_middle">
          <img src="/loot/frame_C.png"/>
        </div>
        <div className="card card_right">
          <img src="/loot/frame_C.png"/>
        </div>
      </div>
      
    </div>

  );
}

export default openBox;
