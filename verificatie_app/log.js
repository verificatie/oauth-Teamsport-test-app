const fs = require('fs');
const path = require('path');

// Functie om logbestanden te lezen
function getLogs() {
  const logFilePath = path.join(__dirname, '../logs/error.log');

  if (!fs.existsSync(logFilePath)) {
    return '<p>No log file found.</p>';
  }

  try {
    const logContent = fs.readFileSync(logFilePath, 'utf-8');
    return `<pre>${escapeHtml(logContent)}</pre>`;
  } catch (error) {
    console.error('Error reading log file:', error);
    return '<p>Error reading log file.</p>';
  }
}

// HTML-escaper om XSS-aanvallen te voorkomen
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = function logPage() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Log Page</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css">
      <style>
        body {
          background-color: #f8f9fa;
          padding: 20px;
        }
        pre {
          background-color: #fff;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow-x: auto;
        }
      </style>
    </head>
    <body>
      <h1>Error Log</h1>
      ${getLogs()}
      <footer>
        <p><a href="/">Back to Home</a></p>
      </footer>
    </body>
    </html>
  `;
};
