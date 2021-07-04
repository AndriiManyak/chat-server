const disconnect = (io, currentUser, contacts) => {
    io.on('disconnect', () => {
        currentUser.goOffline();
        io.to('messenger').emit('receive_list_of_contacts', contacts);
    })
}