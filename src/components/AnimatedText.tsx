import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  text: string;
  typingSpeed?: number;
  loopDelay?: number;
  cursorBlinkSpeed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  typingSpeed = 100,
  loopDelay = 1000,
  cursorBlinkSpeed = 500
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const animationRef = useRef<number | null>(null);

  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  // Handle typing animation
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        // Start deleting after a delay
        setIsTyping(false);
        timeoutId = setTimeout(deleteText, loopDelay);
      }
    };

    const deleteText = () => {
      if (currentIndex > 0) {
        setDisplayText(text.substring(0, currentIndex - 1));
        currentIndex--;
        timeoutId = setTimeout(deleteText, typingSpeed / 2); // Faster deletion
      } else {
        // Start typing again after a delay
        setIsTyping(true);
        timeoutId = setTimeout(typeText, loopDelay / 2);
      }
    };

    // Start the animation
    typeText();

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, typingSpeed, loopDelay]);

  return (
    <div className="animated-text-container">
      <h1 className="animated-text">
        {displayText}
        <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
      </h1>
    </div>
  );
};

export default AnimatedText;