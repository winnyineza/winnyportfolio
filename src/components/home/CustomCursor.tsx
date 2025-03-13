
import React from "react";

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  isHoveringHero: boolean;
}

const CustomCursor = ({ mousePosition, isHoveringHero }: CustomCursorProps) => {
  return (
    <div 
      className="cursor-dot fixed z-50 pointer-events-none" 
      style={{ 
        transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        width: isHoveringHero ? '80px' : '16px',
        height: isHoveringHero ? '80px' : '16px',
        background: isHoveringHero ? 'rgba(255, 255, 255, 0.2)' : 'white',
        borderRadius: '50%',
        transition: 'width 0.3s, height 0.3s, background 0.3s',
        opacity: 0.7
      }}
    />
  );
};

export default CustomCursor;
