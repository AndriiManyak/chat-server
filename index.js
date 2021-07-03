const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
