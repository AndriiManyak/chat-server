const disconnect = require('./disonnect');
const joinChat = require('./joinChat');
const User = require('../../entities/User');

const connection = (io, contacts) => {
    io.on('connection', socket => {
        let currentUser;
        socket.join('messenger');

        const user = socket.handshake.query;

        if (user.id) {
            currentUser = contacts.find(contact => contact.id === user.id);
        }

        if (currentUser) {
            currentUser.goOnline();
            currentUser.setSocketId(socket.id);
        } else {
            const newUser = new User(socket.id);
            contacts.push(newUser);
            currentUser = newUser;
            socket.emit('receive_created_user_info', currentUser);
        }

        io.to('messenger').emit('receive_list_of_contacts', contacts);

        joinChat(io, socket, currentUser);
        disconnect(socket, io, contacts, currentUser);
    });
};

module.exports = connection;
