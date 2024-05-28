
import React from 'react';

import '../styles/Root.css';
import '../styles/Shop.css';
import '../styles/Extra.css';

import { GlobalContext } from '../toolbox/GlobalContext';

function Shop() {

  const { page, setPage } = React.useContext(GlobalContext);

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
      <div className="shop_main">
      a</div>
    </div>
  );
}

export default Shop;