import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-monokai'; // You can choose a different theme
import './JavaIDE.css';

const JavaIDE: React.FC = () => {
  const [javaCode, setJavaCode] = useState<string>(''); // Java code to be tested
  const [result, setResult] = useState<string>(''); // Result of the test
  const [isRunning, setIsRunning] = useState<boolean>(false); // Flag indicating if the test is running

//   const editorRef = useRef<any>(null);

  // Handle the submission of the Java code
  const handleSubmit = async () => {
    setIsRunning(true); // Indicate the test is running

    try {
      const response = await fetch('http://localhost:8080/run-java-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ javaCode}),
      });

          // Check if response is ok and parse JSON
        if (!response.ok) {
            const errorText = await response.text(); // Get plain text if JSON fails
            throw new Error(`Server error: ${errorText}`);
        }

      const data = await response.json();
      setResult(data.output || data.message); // Display the result or error message
    } catch (error) {
      console.error('Error occurred:', error);
      setResult('Error occurred while running the test.');
    } finally {
      setIsRunning(false); // Indicate the test has finished running
    }
  };

  return (
    <div className="java-selenium-test-container">
      <h2 className="java-selenium-test-title">Java Test Environment</h2>

      {/* Monaco Editor for Java code input */}
      <div className="java-selenium-editor">
        <AceEditor
          mode="java"
          theme="monokai"
          name="java-code-editor"
          value={javaCode}
          onChange={setJavaCode}
          fontSize={16}
          showPrintMargin={false}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          width="100%" // Set the editor to fill the container width
          height="400px" // Set the height of the editor
        />
      </div>

      {/* Submit button to run the Java code */}
      <div style={{ marginTop: '20px' }}>
        <button
          className="java-selenium-test-button"
          onClick={handleSubmit}
          disabled={isRunning}
        >
          {isRunning ? 'Running...' : 'Run Test'}
        </button>
      </div>

      {/* Display the output or errors */}
      {result && (
        <div className="java-selenium-output-container">
          <h3>Output:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default JavaIDE;