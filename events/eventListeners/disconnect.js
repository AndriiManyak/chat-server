const disconnect = (socket, io, contacts, currentUser) => {
    socket.on('disconnect', () => {
        currentUser.goOffline();
        io.to('messenger').emit('receive_list_of_contacts', contacts);
    });
};

module.exports = disconnect;
