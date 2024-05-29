
import React from 'react';

import '../styles/Root.css';
import '../styles/Animations.css';
import '../styles/Inventory.css';
import '../styles/Extra.css';

import { GlobalContext } from '../toolbox/GlobalContext';

function Inventory() {

  const { page, setPage } = React.useContext(GlobalContext);
  const [ invPage, setInvPage ] = React.useState('all')

  return (
    <div className="inv">
      <div className="inv_header">
        <div className="inv_header_gems">
          <span className="inv_header_icon plx-rubine"></span>
          <span>17k</span>
        </div>
        <div className="inv_header_gems">
          <span className="inv_header_icon plx-sapphire"></span>
          <span>2</span>
        </div>
        <div className="inv_header_gems">
          <span className="inv_header_icon plx-jade"></span>
          <span>67K</span>
        </div>
        <div className="inv_header_gems">
          <span className="inv_header_icon plx-token"></span>
          <span>0</span>
        </div>
      </div>
      <div className="inv_sidebar">
        <div className={`inv_sidebar_separator
          ${invPage === 'all' ? 'selected' : ''}`}
          onClick={() => setInvPage('all')}>
          <i class="fa-solid fa-asterisk inv_sidebar_icon"></i>
          <span>Tudo</span>
        </div>
        <div className={`inv_sidebar_separator
          ${invPage === 'items' ? 'selected' : ''}`}
          onClick={() => setInvPage('items')}>
          <i class="fa-solid fa-vial inv_sidebar_icon"></i>
          <span>Itens</span>
        </div>
        <div className={`inv_sidebar_separator
          ${invPage === 'backgrounds' ? 'selected' : ''}`}
          onClick={() => setInvPage('backgrounds')}>
          <i class="fa-regular fa-images inv_sidebar_icon"></i>
          <span>Fundos</span>
        </div>
        <div className={`inv_sidebar_separator
          ${invPage === 'bottoms' ? 'selected' : ''}`}
          onClick={() => setInvPage('bottoms')}>
          <i class="fa-regular fa-circle-dot inv_sidebar_icon"></i>
          <span>Bottoms</span>
        </div>
        <div className={`inv_sidebar_separator
          ${invPage === 'stickers' ? 'selected' : ''}`}
          onClick={() => setInvPage('stickers')}>
          <i class="fa-solid fa-star inv_sidebar_icon"></i>
          <span>Stickers</span>
        </div>
        <div className={`inv_sidebar_separator
          ${invPage === 'flags' ? 'selected' : ''}`}
          onClick={() => setInvPage('flags')}>
          <i class="fa-solid fa-flag inv_sidebar_icon"></i>
          <span>Flags</span>
        </div>
      </div>
      <div className="inv_main">
        <h1>Inventario</h1>
        <div className="inv_table">
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

export default Inventory;