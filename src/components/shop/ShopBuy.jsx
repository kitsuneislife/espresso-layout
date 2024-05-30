import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/Extra.css';

import Toolbox from '../../toolbox/Global'

function ShopBuy({ item, onClose }) {

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div className="vitrine_blur" onClick={handleBackdropClick}>
      <div className={`buy_modal sc_rarity sc_rarity_${item.rarity}`}>
        <div className="header">
          <div>
            <span className={`icon48 plx-rarity-${item.rarity}`}></span>
            <div className="title">{item.name}</div>
          </div>
          {/* <div className="subtitle">Fundo super raro {item.rarity}</div> */}
        </div>
        <div className="body">
          <img src={item.image}></img>
        </div>
        <div className="footer">
          {item.price.rubine && (
            <div className="sc_button_modal">
              <div>
                <i className="plx-rubine"></i>
                <span>{Toolbox.miliarize(item.price.rubine, "soft")}</span>
              </div>
            </div>
          )}
          {item.price.sapphire && (
            <div className="sc_button_modal sapphire">
              <div>
                <i className="plx-sapphire"></i>
                <span>{Toolbox.miliarize(item.price.sapphire, "soft")}</span>
              </div>
            </div>
          )}
        </div>
  
      </div> 
    </div>
  );
}

export default ShopBuy;
