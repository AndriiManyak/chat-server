const disconnect = require('./disonnect');
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
        } else {
            const newUser = new User(socket.id)
            currentUser = newUser;
            currentUser.goOnline();
            contacts.push(newUser);
            socket.emit('receive_created_user_info', newUser);
        }

        io.to('messenger').emit('receive_list_of_contacts', contacts.filter(contact => contact.id !== currentUser.id));


        disconnect(socket, io, contacts);
    });
};

module.exports = connection;
