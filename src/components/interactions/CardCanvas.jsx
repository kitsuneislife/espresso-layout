import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';

import '../../styles/OpenBox.css';
import '../../styles/Extra.css';

import Toolbox from '../../toolbox/Global'

function CardCanvas({ item, position, rarity }) {

  return (
    <div className={`card card_${position}`}>
      <img src={`/loot/frame_${rarity.toUpperCase()}.png`}/>
    </div>
  );
}

export default CardCanvas;
