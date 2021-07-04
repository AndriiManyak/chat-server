const disconnect = require('./disonnect');
const User = require('../../entities/User');

const connection = (io, contacts) => {
    io.on('connection', socket => {
        let currentUser;

        socket.on('join_messenger', userData => {
            socket.join('messenger');

            if (userData) {
                currentUser = contacts.find(contact => contact.id === userData.id);
            }

            if (currentUser) {
                currentUser.goOnline();
            } else {
                const newUser = new User();
                newUser.goOnline();
                currentUser = newUser;
                contacts.push(newUser);
                socket.emit('receive_created_user_info', newUser);
            }

            console.log(currentUser)
            io.to('messenger').emit('receive_list_of_contacts', contacts.filter(contact => contact.id !== currentUser.id));
        });

        disconnect();
    });
};

module.exports = connection;
