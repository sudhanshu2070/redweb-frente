import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

// Use the cors middleware
// This will allow requests from any origin. You can configure it more specifically if needed.
app.use(cors({
    origin: '*',  // Allow all origins, you can change this to a specific domain like 'http://localhost:3000' if needed
    methods: ['GET', 'POST', 'OPTIONS'],  // Allow specific methods (including OPTIONS)
    allowedHeaders: ['Content-Type'],  // Allow specific headers
    preflightContinue: false,  // Don't pass the OPTIONS request to the next handler
    optionsSuccessStatus: 204,  // Some legacy browsers (IE11) choke on 204 status
  }));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Helper function to extract class name (assuming class is the first class declaration)
const extractClassName = (javaCode: string): string | null => {
    const classMatch = javaCode.match(/class\s+([A-Za-z0-9_]+)/);
    return classMatch ? classMatch[1] : null;
  };

// POST endpoint to receive Java code and run it
app.post('/run-java-test', (req: Request, res: Response) => {
    const javaCode = req.body.javaCode;
  
    if (!javaCode) {
      return res.status(400).send('No Java code provided.');
    }
  
    // Extract the class name from the Java code
    const className = extractClassName(javaCode);

    if (!className) {
        return res.status(400).send('Could not find a valid class name.');
    }

    const fileName = `${className}.java`;
    const filePath = path.join(__dirname, fileName);
  
    try {
      fs.writeFileSync(filePath, javaCode); // Write the Java code to a temporary file
  
        exec(`javac -target 1.8 -source 1.8 ${filePath}`, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
            console.error('Compilation Error:', compileStderr);  // Log compilation error
            return res.status(500).json({ error: `Compilation error: ${compileStderr}` });
        }
            
        console.log('Compilation Successful:', compileStdout);
   
        // Run the compiled Java class file, with classpath set to the current directory
        exec(`java -cp ${__dirname} ${className}`, (runError, runStdout, runStderr) => {
            if (runError) {
            return res.status(500).json({ error: `Runtime error: ${runStderr}` });
            }
         
        console.log('Runtime Output:', runStdout);   

        // Send back the output from running the Java program
        return res.json({ output: runStdout });
        });
      });
    } catch (error) {
      console.error('Error during file operation or execution:', error);  // Log unexpected errors
      res.status(500).send('Server error occurred.');
    }
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
