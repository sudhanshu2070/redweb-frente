import React, { useEffect, useRef, useState } from 'react';
import './AnimatedText.css';

interface AnimatedTextProps {
  text: string;
  typingSpeed?: number;
  loopDelay?: number;
  cursorBlinkSpeed?: number;
  textStyle?: 'gradient' | 'solid' | 'outline';
  cursorStyle?: 'block' | 'line' | 'underscore';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  typingSpeed = 100,
  loopDelay = 1000,
  cursorBlinkSpeed = 500,
  textStyle = 'gradient',
  cursorStyle = 'block',
  size = 'md'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const animationRef = useRef<{
    timeoutId?: NodeJS.Timeout;
    frameId?: number;
  }>({ timeoutId: undefined, frameId: undefined });

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
    const animationState = { isRunning: true };

    const typeText = () => {
      if (!animationState.isRunning) return;

      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        animationRef.current.timeoutId = setTimeout(typeText, typingSpeed);
      } else {
        animationRef.current.timeoutId = setTimeout(deleteText, loopDelay);
      }
    };

    const deleteText = () => {
      if (!animationState.isRunning) return;

      if (currentIndex > 0) {
        setDisplayText(text.substring(0, currentIndex - 1));
        currentIndex--;
        animationRef.current.timeoutId = setTimeout(deleteText, typingSpeed / 2);
      } else {
        animationRef.current.timeoutId = setTimeout(typeText, loopDelay / 2);
      }
    };

    typeText();

    // Storing the current ref value locally
    const currentAnimationRef = animationRef.current;

    return () => {
      animationState.isRunning = false;
      if (currentAnimationRef.timeoutId) {
        clearTimeout(currentAnimationRef.timeoutId);
      }
      if (currentAnimationRef.frameId) {
        cancelAnimationFrame(currentAnimationRef.frameId);
      }
    };
  }, [text, typingSpeed, loopDelay]);

  return (
    <div className={`animated-text-container ${size}`}>
      <h1 className={`animated-text ${textStyle}`}>
        {displayText}
        <span className={`cursor ${cursorStyle} ${showCursor ? 'visible' : ''}`}></span>
      </h1>
    </div>
  );
};

export default AnimatedText;