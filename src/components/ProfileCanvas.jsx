import React, { useRef, useEffect, useContext } from 'react';
import { UserContext } from '../toolbox/UserContext';

const ProfileCanvas = () => {
  const { user } = useContext(UserContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
      });
    };

    const loadFont = (name, url) => {
      const font = new FontFace(name, `url(${url})`);
      return font.load().then((loadedFont) => {
        document.fonts.add(loadedFont);
        return loadedFont;
      });
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const backgroundSrc = 'https://pollux.gg/backdrops/idolproj.png';
    const pfpSrc = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=512`;
    const layoutSrc = './builder/profile.png';
    const flairSrc = './builder/flairs/default.png';
    const fontSrc = './fonts/PantonExtraBold.ttf';

    canvas.width = 800;
    canvas.height = 600;

    Promise.all([
      loadImage(backgroundSrc),
      loadImage(pfpSrc),
      loadImage(layoutSrc),
      loadImage(flairSrc),
      loadFont('panton', fontSrc)
    ]).then(([background, pfp, layout, flair]) => {
      // Desenhar o background com bordas arredondadas
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

      // Desenhar a foto do perfil com bordas arredondadas
      const pfpX = 74;
      const pfpY = 156;
      const pfpRadius = 105;
      context.save();
      context.beginPath();
      context.arc(pfpX + pfpRadius, pfpY + pfpRadius, pfpRadius, 0, Math.PI * 2, true);
      context.closePath();
      context.clip();
      context.drawImage(pfp, pfpX, pfpY, pfpRadius * 2, pfpRadius * 2);
      context.restore();

      // Desenhar o layout
      context.drawImage(layout, 0, 0, canvas.width, canvas.height);

      // Desenhar o nome do usuário
      const username = user.username.length > 16 ? user.username.slice(0, 16) + '...' : user.username;
      const usernameX = 545;
      const usernameY = 542;

      context.font = '42px panton';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#2b2b3b';
      context.strokeStyle = 'white';
      context.lineWidth = 4;

      context.strokeText(username, usernameX, usernameY);
      context.fillText(username, usernameX, usernameY);

      // Desenhar o flair
      context.drawImage(flair, 675, 464, 120, 144);
    }).catch((error) => {
      console.error('Erro ao carregar os recursos', error);
    });
  }, [user]);

  return <canvas ref={canvasRef} />;
};

export default ProfileCanvas;
