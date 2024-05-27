
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
      <ProfileCanvas />
    </div>
  );
}

export default Profile;