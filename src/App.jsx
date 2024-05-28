
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './styles/Root.css';

import { GlobalContext } from './toolbox/GlobalContext';
import { UserProvider, UserContext } from './toolbox/UserContext';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

const MainApp = () => {
  const { page } = useContext(GlobalContext);
  const { user, setUser } = useContext(UserContext);

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
  }, [setUser]);

  const handleLogin = () => {
    window.location.href = `${window.location.origin}:3001/auth/discord`;
  };

  return (
    <main>
      <Sidebar />
      {page === 'home' && <Home />}
      {page === 'collection' && <div>Oi, você está na página Collection</div>}
      {page === 'inventory' && <Inventory />}
      {page === 'shop' && <Shop />}
      {page === 'profile' && <Profile />}
      {page === 'config' && <div>Oi, você está na página Contact</div>}
      {/* <div>
        {user ? (
          <div>Bem-vindo, {user.username}</div>
        ) : (
          <button onClick={handleLogin}>Login com Discord</button>
        )}
      </div> */}
    </main>
  );
};

export default function App() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}
