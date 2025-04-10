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
        {/* <iframe
          ref={iframeRef}
          src="https://codesandbox.io/p/devbox/q9f92t?embed=1&file=%2Fmain.py&showConsole=true"
          title="Python IDE"
          className="codesandbox-iframe"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        /> */}

        <iframe 
            ref={iframeRef}
            src="https://codesandbox.io/p/devbox/selethon-forked-kndghs?workspaceId=ws_3x1wDg84fArUiVfwbHXq92&embed=1&file=%2Fmain.py"
            title="Selethon (forked)"
            // style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
            className="codesandbox-iframe"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        >

        </iframe>
        
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