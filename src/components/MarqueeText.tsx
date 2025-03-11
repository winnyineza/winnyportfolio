
import React from 'react';

const MarqueeText = () => {
  const marqueeText = "UI/UX DESIGN • WEB DEVELOPMENT • APP DEVELOPMENT • BRAND IDENTITY • SOCIAL MEDIA • ";
  
  return (
    <div className="w-full overflow-hidden border-t border-b border-gray-800 py-4 bg-black">
      <div className="marquee-container">
        <div className="marquee-content animate-marquee">
          {Array(4).fill(marqueeText).map((text, idx) => (
            <span key={idx} className="text-xl md:text-2xl font-bold mx-4 text-white">{text}</span>
          ))}
        </div>
        
        <div className="marquee-content animate-marquee" aria-hidden="true">
          {Array(4).fill(marqueeText).map((text, idx) => (
            <span key={idx} className="text-xl md:text-2xl font-bold mx-4 text-white">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
