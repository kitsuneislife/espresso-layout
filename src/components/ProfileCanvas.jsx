import React, { useRef, useEffect, useContext } from 'react';

import { UserContext } from '../toolbox/UserContext';

const ProfileCanvas = () => {
  
  const { user } = useContext(UserContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');


    let pfp = new Image()
    pfp.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`;
    let layout = new Image();
    layout.src = './builder/profile.png';

    canvas.width = 800;
    canvas.height = 600;

    pfp.onload = () => {
      const x = 74;
      const y = 156; 
      const radius = 105; 
      context.save();
      context.beginPath();
      context.arc(x + radius, y + radius, radius, 0, Math.PI * 2, true);
      context.closePath();
      context.clip();
      context.drawImage(pfp, x, y, radius * 2, radius * 2);
      context.restore();
    };
    pfp.onerror = (error) => { console.error('Erro ao carregar a imagem', error) };
    layout.onload = () => { context.drawImage(layout, 0, 0, canvas.width, canvas.height) };
    layout.onerror = (error) => { console.error('Erro ao carregar a imagem', error) };

  }, []);

  return <canvas ref={canvasRef} />;
};

export default ProfileCanvas;
