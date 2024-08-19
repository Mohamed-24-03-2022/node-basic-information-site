// const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const express = require('express');
const app = express();

const eventEmitter = new EventEmitter();

const PORT = process.env.PORT ||  8080;

eventEmitter.on('start', () => {
  console.log('started');
});


app.get('/', (req, res) =>{
  eventEmitter.emit('start' /*optional arguments */);
  fs.readFile(
    path.join(__dirname, 'public', 'index.html'),
    (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  );
})
app.get('/contact-me', (req, res) =>{
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
})
app.get('/about', (req, res) =>{
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
})
app.get('*', (req, res) =>{
  fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
})

app.listen(PORT, () =>
  console.log('Server is up and running on localhost:' + PORT)
);


// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
    
//   } else if (req.url === '/contact-me') {
    
//   } else if (req.url === '/about') {
   
//   } else {
    
//   }
// });

// server.listen(process.env.PORT || port, () =>
//   console.log('Server is up and running on localhost:' + port)
// );
