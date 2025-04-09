import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to receive Java code and run it
app.post('/run-java-test', (req: Request, res: Response) => {
  const javaCode = req.body.javaCode;

  if (!javaCode) {
    return res.status(400).send('No Java code provided.');
  }

  // Define the temporary file path
  const fileName = 'Test.java';
  const filePath = path.join(__dirname, fileName);

  // Write the Java code to a temporary file
  fs.writeFileSync(filePath, javaCode);

  // Compile the Java code using javac
  exec(`javac ${filePath}`, (compileError, compileStdout, compileStderr) => {
    if (compileError) {
      return res.status(500).send(`Compilation error: ${compileStderr}`);
    }

    // Run the compiled Java class file
    exec(`java Test`, (runError, runStdout, runStderr) => {
      if (runError) {
        return res.status(500).send(`Runtime error: ${runStderr}`);
      }

      // Send back the output from running the Java program
      return res.json({ output: runStdout });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});