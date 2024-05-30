import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/Extra.css';

import Toolbox from '../../toolbox/Global'

function ShopItem({ title, className, collection, rarity, price, image, id, onClick }) {

  title = title.length > 16 ? title.slice(0, 16) + '...' : title;
  
  return (
    <div className={`shop_item_container sc_rarity sc_rarity_${rarity}`}>
      <div>
        <div className="sc_header">
          <div></div>
          <span>{title}</span>
          {className == 'item' ? (
            <i className="fa-solid fa-vial shop_sidebar_icon"></i>
          ) : className == 'background' ? (
            <i className="fa-solid fa-images shop_sidebar_icon"></i>
          ) : className == 'bottom' ? (
            <i className="fa-solid fa-circle-dot shop_sidebar_icon"></i>
          ) : className == 'sticker' ? (
            <i className="fa-solid fa-star shop_sidebar_icon"></i>
          ) : className == 'flag' ? (
            <i className="fa-solid fa-flag shop_sidebar_icon"></i>
          ) : null}
          <div className="sc_subheader"></div>
        </div>
        <div className="sc_body" style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="sc_footer">
          <div className="sc_button_modal" onClick={onClick}>
            {price.rubine && (
            <div>
              <i className="plx-rubine"></i>
              <span>{Toolbox.miliarize(price.rubine, "soft")}</span>
            </div>
            )}
            {price.sapphire && (
              <div>
                <i className="plx-sapphire"></i>
                <span>{Toolbox.miliarize(price.sapphire, "soft")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div> 
  );
}

export default ShopItem;
