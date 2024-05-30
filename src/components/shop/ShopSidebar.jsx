
import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/Extra.css';

function ShopSidebar({ shopPage, setShopPage }) {
  
  return (
    <div className="shop_sidebar">
      <div className={`shop_sidebar_separator
        ${shopPage === 'all' ? 'selected' : ''}`}
        onClick={() => setShopPage('all')}>
        <i className="fa-solid fa-asterisk shop_sidebar_icon"></i>
        <span>Tudo</span>
      </div>
      <div className={`shop_sidebar_separator
        ${shopPage === 'item' ? 'selected' : ''}`}
        onClick={() => setShopPage('item')}>
        <i className="fa-solid fa-vial shop_sidebar_icon"></i>
        <span>Itens</span>
      </div>
      <div className={`shop_sidebar_separator
        ${shopPage === 'background' ? 'selected' : ''}`}
        onClick={() => setShopPage('background')}>
        <i className="fa-regular fa-images shop_sidebar_icon"></i>
        <span>Fundos</span>
      </div>
      <div className={`shop_sidebar_separator
        ${shopPage === 'bottom' ? 'selected' : ''}`}
        onClick={() => setShopPage('bottom')}>
        <i className="fa-regular fa-circle-dot shop_sidebar_icon"></i>
        <span>Bottoms</span>
      </div>
      <div className={`shop_sidebar_separator
        ${shopPage === 'sticker' ? 'selected' : ''}`}
        onClick={() => setShopPage('sticker')}>
        <i className="fa-solid fa-splotch shop_sidebar_icon"></i>
        <span>Stickers</span>
      </div>
      <div className={`shop_sidebar_separator
        ${shopPage === 'flag' ? 'selected' : ''}`}
        onClick={() => setShopPage('flag')}>
        <i className="fa-solid fa-bookmark shop_sidebar_icon"></i>
        <span>Flags</span>
      </div>
    </div>
  );
}

export default ShopSidebar;