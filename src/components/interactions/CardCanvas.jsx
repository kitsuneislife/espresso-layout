import React, { useRef, useEffect } from 'react';
import Toolbox from '../../toolbox/Global';
import '../../styles/Root.css';
import '../../styles/Animations.css';
import '../../styles/Shop.css';
import '../../styles/OpenBox.css';
import '../../styles/Extra.css';

function CardCanvas({ item, position, rarity }) {
  const canvasRef = useRef(null);

  const translate_rarity = {
      "c": "Comum",
      "uc": "Incomum",
      "r": "Raro",
      "sr": "Super Raro",
      "ur": "Ultra Raro"
    };

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

    const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
      const words = text.split(' ');
      let line = '';
      const lines = [];

      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && i > 0) {
          lines.push(line);
          line = words[i] + ' ';
        } else {
          line = testLine;
        }
      }
      lines.push(line);

      for (let j = 0; j < lines.length; j++) {
        context.strokeText(lines[j], x, y + (j * lineHeight));
        context.fillText(lines[j], x, y + (j * lineHeight));
      }
    };

    function drawRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + width, y, x + width, y + height, radius);
      ctx.arcTo(x + width, y + height, x, y + height, radius);
      ctx.arcTo(x, y + height, x, y, radius);
      ctx.arcTo(x, y, x + width, y, radius);
      ctx.closePath();
    }
    
    const drawCard = (context, frame, sparkles, image) => {
      context.drawImage(frame, 0, 0, canvasRef.current.width, canvasRef.current.height);

      context.save();

      context.font = "bold 22px 'Nunito'";
      context.textAlign = "center";
      context.textBaseline = "middle"; 

      context.strokeStyle = "#121225";
      context.lineWidth = 12;
      context.fillStyle = "rgba(255, 255, 255, 0.6)";

      context.fillText(translate_rarity[rarity], canvasRef.current.width / 2, 30);
      
      if (item.class === "background") {
        context.save();
        context.strokeStyle = "#FFFFFF";
        context.lineWidth = 8;

        const rotationAngle = Math.PI / -20; 
        const centerX = 20 + 150 / 2; 
        const centerY = 110 + 77 / 2; 
        context.translate(centerX, centerY); 
        context.rotate(rotationAngle); 
        context.translate(-centerX, -centerY); 
        context.drawImage(image, 10, 110, 150, 77);

        context.strokeStyle = "#FFFFFF";
        context.lineWidth = 6;
        drawRoundedRect(context, 10, 110, 150, 77, 4);
        context.stroke();

        context.strokeStyle = "#121225";
        context.lineWidth = 4;
        drawRoundedRect(context, 8, 108, 154, 81, 4);
        context.stroke();
        
        context.restore();
      } else if(item.class === "currency") {
        context.save();
        context.drawImage(image, 30, 90, 110, 110);
        context.restore();
      } else {
        context.save();
        context.drawImage(image, 30, 90, 110, 110);
        context.restore();
      }

      context.font = item.amount ? "36px 'Panton Italic'" : "18px 'Panton Italic'";
      context.textAlign = "center";
      context.textBaseline = "middle"; 

      const x = canvasRef.current.width / 2;
      const y = canvasRef.current.height / 2;

      context.strokeStyle = "#121225";
      context.lineWidth = 12;
      context.fillStyle = "#FFFFFF";

      wrapText(context, (item.name || `${item.amount}`).toUpperCase(), x, y, canvasRef.current.width - 30, 20);

      if ((rarity === 'sr' || rarity === 'ur') && sparkles) {
        context.drawImage(sparkles, 0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    const frame = `/loot/frame_${rarity.toUpperCase()}.png`;
    const sparkles = `/loot/sparkles_1.png`;
    const panton = './fonts/PantonExtraBold.ttf';
    const pantonItalic = './fonts/PantonExtraBoldItalic.ttf';
    const nunito = './fonts/Nunito.ttf';

    canvas.width = 170;
    canvas.height = 400;

    Promise.all([
      loadImage(frame),
      loadImage(sparkles),
      loadImage(item.image),
      loadFont('Panton', panton),
      loadFont('Panton Italic', pantonItalic),
      loadFont('Nunito', nunito)
    ]).then(([frame, sparkles, image]) => {
      drawCard(context, frame, sparkles, image);
    }).catch((error) => {
      console.error('Erro ao carregar os recursos', error);
    });
  }, [item, rarity]);

  return (
    <div className={`card card_${position}`}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default CardCanvas;
