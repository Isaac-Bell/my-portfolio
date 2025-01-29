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

    const fontSize = 5;
    const fontSize2= 10
    const fontSize3= 20
    const columns = Math.floor(width / fontSize);
    // const rows = Math.floor(height / fontSize)

    // Define speed range (e.g., slow: 0.5, medium: 1.5)
    const minSpeed = 0.5;
    const maxSpeed = 0.9;

    const minSpeed2 = 0.1;
    const maxSpeed2 = 0.5;

    const minSpeed3 = 0.08;
    const maxSpeed3 = 0.5;
    // Initialize drops and assign random speeds to each column
    const drops = Array(height).fill(0);
    const drops2 = Array(height).fill(0);
    const drops3 = Array(height).fill(0);

    const speeds = Array.from({ length: columns }, () => Math.random() * (maxSpeed - minSpeed) + minSpeed);
    const speeds2 = Array.from({ length: columns }, () => Math.random() * (maxSpeed2 - minSpeed2) + minSpeed2);
    const speeds3 = Array.from({ length: columns }, () => Math.random() * (maxSpeed3 - minSpeed3) );

    const symbols = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const character = symbols[Math.floor(Math.random() * symbols.length)];

        // Check if the current character is under the mouse cursor
        if (
          mousePosition.current &&
          Math.abs(mousePosition.current.x - x) < fontSize &&
          Math.abs(mousePosition.current.y - y) < fontSize
        ) {
          ctx.fillStyle = getRandomColor();
        } else {
          ctx.fillStyle = "#0F0";
        }

        ctx.fillText(character, x, y);

        // Reset drop if it goes off screen
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y position by the column's speed
        drops[i] += speeds[i];
      }

      requestAnimationFrame(drawMatrix);
    };

    const drawMatrix2 = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize2}px monospace`;

      for (let i = 0; i < drops2.length; i++) {
        const x = i * fontSize2;
        const y = drops2[i] * fontSize2;
        const character = symbols[Math.floor(Math.random() * symbols.length)];

        // Check if the current character is under the mouse cursor
        if (
          mousePosition.current &&
          Math.abs(mousePosition.current.x - x) < fontSize &&
          Math.abs(mousePosition.current.y - y) < fontSize
        ) {
          ctx.fillStyle = getRandomColor();
        } else {
          ctx.fillStyle = "#0F0";
        }

        ctx.fillText(character, x, y);

        // Reset drop if it goes off screen
        if (y > height && Math.random() > 0.975) {
          drops2[i] = 0;
        }

        // Increment y position by the column's speed
        drops2[i] += speeds2[i];
      }

      requestAnimationFrame(drawMatrix2);
    };

    const drawMatrix3 = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize3}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize3;
        const y = drops3[i] * fontSize3;
        const character = symbols[Math.floor(Math.random() * symbols.length)];

        // Check if the current character is under the mouse cursor
        if (
          mousePosition.current &&
          Math.abs(mousePosition.current.x - x) < fontSize &&
          Math.abs(mousePosition.current.y - y) < fontSize
        ) {
          ctx.fillStyle = getRandomColor();
        } else {
          ctx.fillStyle = "#0F0";
        }

        ctx.fillText(character, x, y);

        // Reset drop if it goes off screen
        if (y > height && Math.random() > 0.975) {
          drops3[i] = 0;
        }

        // Increment y position by the column's speed
        drops3[i] += speeds3[i];
      }

      requestAnimationFrame(drawMatrix3);
    };
    setTimeout( drawMatrix3, 2000)
    setTimeout( drawMatrix, 2000)
    setTimeout( drawMatrix2, 2000)
    // setTimeout( drawMatrix, 5000)
   
    // drawMatrix()
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
