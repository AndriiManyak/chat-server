const disconnect = require('./disconnect');
const joinChat = require('./joinChat');
const User = require('../../entities/User');
const activateSpamBot = require("../../utils/activateSpamBot");

const connection = (io, contacts, chats) => {
    io.on('connection', socket => {
        let currentUser;
        socket.join('messenger');

        const user = socket.handshake.query;

        if (user.id) {
            currentUser = contacts.find(contact => contact.id.toString() === user.id);
        }

        if (currentUser) {
            currentUser.goOnline();
        } else {
            const newUser = new User();
            contacts.push(newUser);
            currentUser = newUser;
            socket.emit('receive_created_user', currentUser);
        }

        io.to('messenger').emit('receive_contacts', contacts);

        activateSpamBot(io, currentUser, chats);
        joinChat(io, socket, currentUser, chats);
        disconnect(socket, io, contacts, currentUser);
    });
};

module.exports = connection;
