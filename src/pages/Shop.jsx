
import React from 'react';

import '../styles/Root.css';
import '../styles/Animations.css';
import '../styles/Shop.css';
import '../styles/Extra.css';

import { GlobalContext } from '../toolbox/GlobalContext';
import ShopSidebar from '../components/shop/ShopSidebar';
import ShopItem from '../components/shop/ShopItem';
import ShopBuy from '../components/shop/ShopBuy';

import OpenBox from '../components/interactions/OpenBox';


import DCompItems from '../dcomp/Items.json';

function Shop() {

  const { page, setPage } = React.useContext(GlobalContext);
  const [ shopPage, setShopPage ] = React.useState('all')
  const [ selectedItem, setSelectedItem ] = React.useState(null);
  const [ openBoxModal, setBoxModal ] = React.useState(false);

  const handleBoxModal = () => { setBoxModal(true); };
  const handleCloseBoxModal = () => { setBoxModal(false); };

  const handleItemClick = (item) => { setSelectedItem(item) }
  const handleCloseShopBuy = () => { setSelectedItem(null) }

  const filterDCompItems = shopPage === 'all' ? DCompItems : DCompItems.filter(item => item.class === shopPage);

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
      <ShopSidebar 
        shopPage={shopPage}
        setShopPage={setShopPage}
      />
      <div className="shop_main">
        <div className="shop_table">
          {/* <div className="item_container sc_rarity sc_rarity_ur">
            <div>
              <div className="sc_header">
                <div></div>
                <span>IDOL PROJECT CLUB</span>
                <i className="fa-regular fa-images inv_sidebar_scon"></i>
                <div className="sc_subheader"></div>
              </div>
              <div className="sc_body">
              </div>
              <div className="sc_footer">
                <div className="sc_button_modal">
                  <div>
                    <i className="plx-rubine"></i>
                    <span>5k</span>
                  </div>
                  <div>
                    <i className="plx-sapphire"></i>
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {filterDCompItems.map(item => (
            <ShopItem
              key={item.id}
              title={item.name}
              className={item.class}
              collection={item.collection}
              rarity={item.rarity}
              price={item.price}
              image={item.image}
              id={item.id}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <ShopBuy
          item={selectedItem}
          onClose={handleCloseShopBuy}
        />
      )}
      <div>
        <button onClick={handleBoxModal}>Open Box</button>
        {openBoxModal && <OpenBox item={null} onClose={handleCloseBoxModal} />}
      </div>
      
</div>
  );
}

export default Shop;