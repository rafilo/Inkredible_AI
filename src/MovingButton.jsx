import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

const MovingButton = () => {
  const [position, setPosition] = useState({ top: 200, left: 200 });
  const [isMoved, setIsMoved] = useState(false);
  const buttonRef = useRef(null);

  const limitDistance = 50; // set up the limit move distance close the button

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();

      // Calculate the distance to the button's edges
      const distanceToTop = Math.abs(clientY - rect.top);
      const distanceToBottom = Math.abs(clientY - rect.bottom);
      const distanceToLeft = Math.abs(clientX - rect.left);
      const distanceToRight = Math.abs(clientX - rect.right);
      const minDistance = Math.min(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);

      // Move the button when the mouse is close to the button
      if (minDistance < limitDistance) {
        // Make sure the new position is within the window
        const newTop = Math.max(0, Math.min(window.innerHeight - rect.height, Math.random() * (window.innerHeight - rect.height)));
        const newLeft = Math.max(0, Math.min(window.innerWidth - rect.width, Math.random() * (window.innerWidth - rect.width)));

        setPosition({ top: newTop, left: newLeft });
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navigate = useNavigate()

  const handleClick = () => {
    window.location.href = './CatchLogin/index.html';
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        transition: isMoved ? 'top 0.2s, left 0.2s' : 'none', // button moving speed
      }}
    >
       Click here to the Login page!
    </button>
  );
};

export default MovingButton;