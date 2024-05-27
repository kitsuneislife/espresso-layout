import React, { useRef, useEffect, useContext } from 'react';

import { UserContext } from '../toolbox/UserContext';

const ProfileCanvas = () => {
  
  const { user } = useContext(UserContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let background = new Image();
    background.src = `https://pollux.gg/backdrops/idolproj2.png`;
    let pfp = new Image()
    pfp.src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`;
    let layout = new Image();
    layout.src = './builder/profile.png';

    canvas.width = 800;
    canvas.height = 600;

    background.onload = () => { 
      const x = 60; 
      const y = 18; 
      const width = 720;
      const height = 380; 
      const radius = 20;

      context.save();

      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);
      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);
      context.closePath();
      context.clip();
      context.drawImage(background, x, y, width, height);

      context.restore();
      //context.drawImage(background, 60, 18, 720, 380) 
    };
    background.onerror = (error) => { console.error('Erro ao carregar a imagem', error) };
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
