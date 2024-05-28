
import React from 'react';

import '../styles/Root.css';
import '../styles/Inventory.css';
import '../styles/Extra.css';

import { GlobalContext } from '../toolbox/GlobalContext';

function Inventory() {

  const { page, setPage } = React.useContext(GlobalContext);

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
        <div className="inv_sidebar_separator selected">
          <i class="fa-solid fa-asterisk inv_sidebar_icon"></i>
          <span>Tudo</span>
        </div>
        <div className="inv_sidebar_separator">
          <i class="fa-regular fa-images inv_sidebar_icon"></i>
          <span>Fundos</span>
        </div>
        <div className="inv_sidebar_separator">
          <i class="fa-regular fa-circle-dot inv_sidebar_icon"></i>
          <span>Bottons</span>
        </div>
        <div className="inv_sidebar_separator">
          <i class="fa-solid fa-star inv_sidebar_icon"></i>
          <span>Stickers</span>
        </div>
      </div>
      <div className="inv_main">
      </div>
    </div>
  );
}

export default Inventory;