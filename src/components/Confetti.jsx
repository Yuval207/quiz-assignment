// components/Confetti.jsx
import { useEffect, useState } from "react";
import "./Confetti.css";

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const pieces = Array(100)
      .fill()
      .map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -100,
        rotation: Math.random() * 360,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
      }));
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="confetti-container">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            "--x": `${piece.x}vw`,
            "--y": `${piece.y}vh`,
            "--rotation": `${piece.rotation}deg`,
            "--color": piece.color,
            "--delay": `${piece.delay}s`,
            "--duration": `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
