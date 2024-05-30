import React from 'react';
import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/Extra.css';
import Toolbox from '../../toolbox/Global';

function ShopItem({ title, className, collection, rarity, price, image, id, onClick }) {
  const truncatedTitle = title.length > 16 ? `${title.slice(0, 16)}...` : title;

  const iconClasses = {
    lootbox: 'fa-solid fa-gift',
    item: 'fa-solid fa-vial',
    background: 'fa-solid fa-images',
    bottom: 'fa-solid fa-circle-dot',
    sticker: 'fa-regular fa-splotch',
    flag: 'fa-solid fa-bookmark',
  };

  const iconClass = iconClasses[className] || '';

  const renderPrice = () => (
    <>
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
    </>
  );

  return (
    <div className={`shop_item_container ${className !== 'background' ? 'nonbg' : ''} sc_rarity sc_rarity_${rarity}`}>
      <div className="subcontainer">
        <div className="sc_header">
          <div></div>
          <span>{truncatedTitle}</span>
          <i className={`${iconClass} shop_sidebar_icon`}></i>
          <div className="sc_subheader"></div>
        </div>
        <div className={`sc_body ${className !== 'background' ? 'sc_body_nonbg' : ''}`} style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="sc_footer">
          <div className="sc_button_modal" onClick={onClick}>
            {renderPrice()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
