const express = require('express');
const server = express();
const cors = require('cors');
const port = 3000;
server.use(cors());

server.get(`/`, (req, res) => res.send('hello world'));

// server.get(`/search`, (req, res) => res.send(JSON.stringify()))

server.listen(port, () => console.log(`server location at http://localhost:${port}/`))
