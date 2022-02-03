require('dotenv').config(); // allows to stash 'artificial env variables' in a file

const express = require('express');
const cors = require('cors');

console.log(process.env.LADY);
console.log(process.env.API_SECRET);

const PORT = process.env.PORT || 5001; //fallback is noce

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`<h1>This Rocks!</h1>`);
})

server.get('/api', (req, res) => {
    res.json({ message: "This is awesome!" })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})