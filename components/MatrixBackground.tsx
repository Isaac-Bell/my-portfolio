import React, { useEffect, useRef } from "react";

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize1 = 5;
    const fontSize2 = 10;
    const fontSize3 = 20;
    const fontSize4 = 40; 

    const columns = Math.floor(width / fontSize1);

    // Define speeds
    const minSpeed1 = 0.5, maxSpeed1 = 0.9;
    const minSpeed2 = 0.1, maxSpeed2 = 0.5;
    const minSpeed3 = 0.08, maxSpeed3 = 0.5;
    const minSpeed4 = 20, maxSpeed4 = 50;

    // Define update rates
    let frameCount1 = 0, frameCount2 = 0, frameCount3 = 0, frameCount4 = 0; 
    const updateRate1 = 1; // Fastest (updates every frame)
    const updateRate2 = 5; // Updates every 5 frames
    const updateRate3 = 6; // Updates every 10 frames
    const updateRate4 = 500

    const drops1 = Array(columns).fill(0);
    const drops2 = Array(columns).fill(0);
    const drops3 = Array(columns).fill(0);
    const drops4 = Array(columns).fill(5);

    const speeds1 = Array.from({ length: columns }, () => Math.random() * (maxSpeed1 - minSpeed1) + minSpeed1);
    const speeds2 = Array.from({ length: columns }, () => Math.random() * (maxSpeed2 - minSpeed2) + minSpeed2);
    const speeds3 = Array.from({ length: columns }, () => Math.random() * (maxSpeed3 - minSpeed3) + minSpeed3);
    const speeds4 = Array.from({ length: columns }, () => Math.random() * (maxSpeed4 - minSpeed4) + minSpeed4);

    const symbols = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const drawLayer = (ctx: CanvasRenderingContext2D, fontSize: number, drops: number[], speeds: number[], frameCount: number, updateRate: number) => {
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Only change symbol when frame count meets update rate
        const character = (frameCount % updateRate === 0) 
          ? symbols[Math.floor(Math.random() * symbols.length)] 
          : "";

        if (
          mousePosition.current &&
          Math.abs(mousePosition.current.x - x) < fontSize &&
          Math.abs(mousePosition.current.y - y) < fontSize
        ) {
          ctx.fillStyle = getRandomColor();
        } else {
          ctx.fillStyle = "#0F0";
        }

        if (character) ctx.fillText(character, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      drawLayer(ctx, fontSize1, drops1, speeds1, frameCount1, updateRate1);
      drawLayer(ctx, fontSize2, drops2, speeds2, frameCount2, updateRate2);
      drawLayer(ctx, fontSize3, drops3, speeds3, frameCount3, updateRate3);
      drawLayer(ctx, fontSize4, drops4, speeds4, frameCount4, updateRate4);

      frameCount1++;
      frameCount2++;
      frameCount3++;

      requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    return () => {
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mousePosition.current = { x, y };
  };

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      style={{ display: "block", position: "absolute", top: 0, left: 0 }}
    ></canvas>
  );
};

export default MatrixBackground;
