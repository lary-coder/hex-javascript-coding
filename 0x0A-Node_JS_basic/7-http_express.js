const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];
  countStudents(process.argv[2]).then((report) => {
    responseParts.push(report);
    const responseText = responseParts.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  }).catch((err) => {
    responseParts.push(err instanceof Error ? err.message : err.toString());
    const responseText = responseParts.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  });
});

app.listen(1245, () => {
  console.log('Server running');
});

module.exports = app;
