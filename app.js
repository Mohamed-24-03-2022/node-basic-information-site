const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const port = 8080;

eventEmitter.on('start', () => {
  console.log('started');
});


const server = http.createServer((req, res) => {
  if (req.url === '/') {
    eventEmitter.emit('start' /*optional arguments */);
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  } else if (req.url === '/contact-me') {
    fs.readFile(
      path.join(__dirname, 'public', 'contact-me.html'),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  } else if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  } else {
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }
});

server.listen(process.env.PORT || port, () =>
  console.log('Server is up and running on localhost:' + port)
);
