import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ext-language_tools';
import './JavaIDE.css';

const JavaIDE: React.FC = () => {
  const [javaCode, setJavaCode] = useState<string>(
    `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`
  );
  const [result, setResult] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'output'>('editor');

  const handleSubmit = async () => {
    setIsRunning(true);
    setResult('');
    setActiveTab('output');

    try {
      const response = await fetch('http://localhost:8080/run-java-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ javaCode }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      setResult(data.output || data.message);
    } catch (error) {
      console.error('Error occurred:', error);
      setResult(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="java-ide-container">
      <div className="ide-header">
        <div className="header-left">
          <h1 className="ide-title">
            <span className="title-icon">☕</span> Java Playground
          </h1>
          <div className="file-info">Main.java</div>
        </div>
        <div className="header-right">
          <button
            className={`run-button ${isRunning ? 'running' : ''}`}
            onClick={handleSubmit}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <span className="spinner"></span> Running...
              </>
            ) : (
              <>
                <span className="play-icon">▶</span> Run Code
              </>
            )}
          </button>
        </div>
      </div>

      <div className="ide-body">
        <div className="editor-container">
          <AceEditor
            mode="java"
            theme="dracula"
            name="java-code-editor"
            value={javaCode}
            onChange={setJavaCode}
            fontSize={14}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            width="100%"
            height="100%"
            editorProps={{ $blockScrolling: true }}
          />
        </div>

        <div className="output-container">
          <div className="output-tabs">
            <button
              className={`tab-button ${activeTab === 'output' ? 'active' : ''}`}
              onClick={() => setActiveTab('output')}
            >
              Output
            </button>
            <button
              className={`tab-button ${activeTab === 'editor' ? 'active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              Console
            </button>
          </div>
          <div className="output-content">
            {activeTab === 'output' ? (
              <pre className={`output-result ${result ? 'show' : ''}`}>
                {result || 'Run your code to see the output here...'}
              </pre>
            ) : (
              <div className="console-view">
                <div className="console-line">{">"} Ready to execute Java code</div>
                {isRunning && (
                  <div className="console-line">{'>'} Running your program...</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ide-footer">
        <div className="status-bar">
          <span className="status-item">Java</span>
          <span className="status-item">UTF-8</span>
          <span className="status-item">Ln 1, Col 1</span>
        </div>
      </div>
    </div>
  );
};

export default JavaIDE;