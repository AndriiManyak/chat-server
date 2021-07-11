const connection = require('./events/eventListeners/connection');
const express = require('express');
const cors = require('cors');
const socket = require('socket.io');
const port = process.env.PORT || 5000;

const echoBot = require('./bots/echoBot');
const ignoreBot = require('./bots/ignoreBot');
const reverseBot = require('./bots/reverseBot');
const spamBot = require('./bots/spamBot');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

const contacts = [
    echoBot,
    ignoreBot,
    reverseBot,
    spamBot,
];

const chats = [

];

const io = socket(server, {
    cors: {
        origin: '*',
    }
});


connection(io, contacts, chats);
