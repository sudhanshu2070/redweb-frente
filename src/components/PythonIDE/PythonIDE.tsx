import React, { useState, useRef } from 'react';
import './PythonIDE.css';

const PythonIDE: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      iframeRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`python-ide-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="ide-header">
        <h2 className="ide-title">Python Playground</h2>
        <div className="ide-controls">
          <button 
            className="control-button fullscreen-button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? '⤢ Exit' : '⤢ Fullscreen'}
          </button>
        </div>
      </div>
      
      <div className="ide-content">
        <iframe
          ref={iframeRef}
          src="https://codesandbox.io/p/devbox/q9f92t?embed=1&file=%2Fmain.py&showConsole=true"
          title="Python IDE"
          className="codesandbox-iframe"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
      
      <div className="ide-footer">
        <p className="footer-text">
          Powered by CodeSandbox • Run Python code in your browser
        </p>
      </div>
    </div>
  );
};

export default PythonIDE;