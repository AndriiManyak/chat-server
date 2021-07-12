const leaveChatRooms = socket => {
    for (const room of socket.rooms) {
        if (room.includes('&&')) {
            socket.leave(room);
        }
    }
};

module.exports = leaveChatRooms;
