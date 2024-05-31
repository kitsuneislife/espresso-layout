
import React from 'react';

import '../styles/Root.css';
import '../styles/Games.css';

import { GlobalContext } from '../toolbox/GlobalContext';

import GamesHeader from '../components/games/GamesHeader';
import Blackjack from '../components/games/Blackjack';

function Games() {

  const { page, setPage } = React.useContext(GlobalContext);

  return (
    <div className="games">
      <GamesHeader />
      <div className="games_sidebar">
      </div>
      <div className="games_body">
        <Blackjack />
      </div>
    </div>
  );
}

export default Games;