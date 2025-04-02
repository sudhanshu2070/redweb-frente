import React, { useEffect, useRef } from 'react';
import './AnimatedText.css'; // Importing the CSS for animations

// Prop types
interface AnimatedTextProps {
  text: string; // 'text' should be a string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const displayText = text || ''; // Ensure text exists
      textRef.current.innerHTML = ''; // Clear the initial text

      let index = 0;
      const intervalId = setInterval(() => {
        if (index < displayText.length) {
          if (textRef.current) {
            textRef.current.innerHTML += displayText[index];
          }
          index++;
        } else {
          clearInterval(intervalId); // Stop once the entire text is shown
        }
      }, 100); // Adjust the speed here (in ms)
    }
  }, [text]); // Run this effect again if the `text` prop changes

  return (
    <div className="animated-text">
      <h1 ref={textRef}>
        {text} {/* Optionally display text immediately before animation starts */}
      </h1>
    </div>
  );
};

export default AnimatedText;
