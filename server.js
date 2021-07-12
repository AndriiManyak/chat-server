const connection = require('./events/eventListeners/connection');
const express = require('express');
const socket = require('socket.io');
const port = process.env.PORT || 5000;

const echoBot = require('./bots/echoBot');
const ignoreBot = require('./bots/ignoreBot');
const reverseBot = require('./bots/reverseBot');
const spamBot = require('./bots/spamBot');

const app = express();

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
