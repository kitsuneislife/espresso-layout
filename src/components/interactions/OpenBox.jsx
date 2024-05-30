import React from 'react';

import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/Extra.css';

import Toolbox from '../../toolbox/Global'

function openBox({ item, onClose }) {

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="vitrine_blur" onClick={handleBackdropClick}>
      <div>
      </div>
    </div>
  );
}

export default openBox;
