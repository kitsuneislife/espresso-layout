
import React from 'react';

import '../styles/Root.css';
import '../styles/Home.css';

import { GlobalContext } from '../toolbox/GlobalContext';

function Home() {

  const { page, setPage } = React.useContext(GlobalContext);

  return (
    <div className="home">

    </div>
  );
}

export default Home;