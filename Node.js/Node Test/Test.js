const fs = require('fs');
const path = require('path'); // Import path module to handle file paths

try {
  // Resolve the absolute path to data.json relative to the current script file
  const filePath = path.resolve(__dirname, 'data.json');
  let dataSync = fs.readFileSync(filePath, 'utf-8');
  console.log('Below is the Data from Synchronous function call');
  console.log(dataSync);
} catch (err) {
  console.error('Error reading file synchronously:', err);
}
