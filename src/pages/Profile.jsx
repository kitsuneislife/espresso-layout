
import React, { useContext } from 'react';

import '../styles/Root.css';
import '../styles/Profile.css';

import { GlobalContext } from '../toolbox/GlobalContext';
import { UserContext } from '../toolbox/UserContext';

import ProfileCanvas from '../components/ProfileCanvas';

function Profile() {

  const { user } = useContext(UserContext);
  const { page, setPage } = React.useContext(GlobalContext);

  return (
    <div className="profile">
      <div className="profile_box">
        <ProfileCanvas className="profile_canvas" />
        <div className="profile_box_minus">
          <div className="profile_edit_button">
            <i class="fa-solid fa-palette"></i>
            <span>Personalizar</span>
          </div>
          <div className="profile_edit_button">
            <i class="fa-solid fa-pencil"></i>
            <span>Editar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;