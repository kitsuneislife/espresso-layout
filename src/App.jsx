import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/Root.css';
import { GlobalContext } from './toolbox/GlobalContext';
import Sidebar from './components/Sidebar';

export default function App() {
  const { page } = React.useContext(GlobalContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${window.location.origin}:3001/auth/user`, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Usuário não autenticado');
      }
    };
    fetchUser();
  }, []);

  const handleLogin = () => {
    window.location.href = `${window.location.origin}:3001/auth/discord`;
  };

  return (
    <main>
      <Sidebar />
      {page === 'home' && <div>Oi, você está na página Home</div>}
      {page === 'collection' && <div>Oi, você está na página Collection</div>}
      {page === 'config' && <div>Oi, você está na página Contact</div>}
      <div>
        {user ? (
          <div>Bem-vindo, {user.username}</div>
        ) : (
          <button onClick={handleLogin}>Login com Discord</button>
        )}
      </div>
    </main>
  );
}
