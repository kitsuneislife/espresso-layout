
import React from 'react';

import '../styles/Root.css';
import '../styles/Animations.css';
import '../styles/Shop.css';
import '../styles/Extra.css';

import { GlobalContext } from '../toolbox/GlobalContext';

function Shop() {

  const { page, setPage } = React.useContext(GlobalContext);
  const [ shopPage, setShopPage ] = React.useState('all')

  return (
    <div className="shop">
      <div className="shop_header">
        <div className="shop_header_gems">
          <span className="shop_header_icon plx-rubine"></span>
          <span>17k</span>
        </div>
        <div className="shop_header_gems">
          <span className="shop_header_icon plx-sapphire"></span>
          <span>2</span>
        </div>
        <div className="shop_header_gems">
          <span className="shop_header_icon plx-jade"></span>
          <span>67K</span>
        </div>
        <div className="shop_header_gems">
          <span className="shop_header_icon plx-token"></span>
          <span>0</span>
        </div>
      </div>
      <div className="shop_sidebar">
        <div className={`shop_sidebar_separator
          ${shopPage === 'all' ? 'selected' : ''}`}
          onClick={() => setShopPage('all')}>
          <i class="fa-solid fa-asterisk shop_sidebar_icon"></i>
          <span>Tudo</span>
        </div>
        <div className={`shop_sidebar_separator
          ${shopPage === 'items' ? 'selected' : ''}`}
          onClick={() => setShopPage('items')}>
          <i class="fa-solid fa-vial shop_sidebar_icon"></i>
          <span>Itens</span>
        </div>
        <div className={`shop_sidebar_separator
          ${shopPage === 'backgrounds' ? 'selected' : ''}`}
          onClick={() => setShopPage('backgrounds')}>
          <i class="fa-regular fa-images shop_sidebar_icon"></i>
          <span>Fundos</span>
        </div>
        <div className={`shop_sidebar_separator
          ${shopPage === 'bottoms' ? 'selected' : ''}`}
          onClick={() => setShopPage('bottoms')}>
          <i class="fa-regular fa-circle-dot shop_sidebar_icon"></i>
          <span>Bottoms</span>
        </div>
        <div className={`shop_sidebar_separator
          ${shopPage === 'stickers' ? 'selected' : ''}`}
          onClick={() => setShopPage('stickers')}>
          <i class="fa-solid fa-star shop_sidebar_icon"></i>
          <span>Stickers</span>
        </div>
        <div className={`shop_sidebar_separator
          ${shopPage === 'flags' ? 'selected' : ''}`}
          onClick={() => setShopPage('flags')}>
          <i class="fa-solid fa-flag shop_sidebar_icon"></i>
          <span>Flags</span>
        </div>
      </div>
      <div className="shop_main">
        <div className="shop_table">
          <div className="item_container ic_rarity ic_rarity_ur">
            <div>
              <div className="ic_header">
                <div></div>
                <span>IDOL PROJECT CLUB</span>
                <i class="fa-regular fa-images inv_sidebar_icon"></i>
              </div>
              <div className="ic_body">
              </div>
            </div>
          </div>
          <div className="item_container ic_rarity ic_rarity_sr">
            <div>
              <div className="ic_header">
                <div></div>
                <span>IDOL PROJECT CLUB</span>
                <i class="fa-regular fa-images inv_sidebar_icon"></i>
              </div>
              <div className="ic_body">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;