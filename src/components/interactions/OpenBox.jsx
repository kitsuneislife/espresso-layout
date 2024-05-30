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
        <img className="cards_bg" src="/loot/bgSR.png" />
        <CardCanvas 
          item={item}
          position="left"
          rarity="sr"
        />
        <CardCanvas 
          item={{ amount: 75, rarity: "ur", image: '/gems/RBN.png', class: 'currency' }}
          position="middle"
          rarity="ur"
        />
        <CardCanvas 
          item={{ amount: 200, rarity: "ur", image: '/gems/JDE.png', class: 'currency' }}
          position="right"
          rarity="c"
        />
      </div>
    </div>

  );
}

export default openBox;
