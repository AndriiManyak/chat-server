const userTypingMessage = (io, socket, chat) => {
    socket.on('typing_message', () => {
        socket.broadcast.to(chat.id).emit('receive_typing_message');
    });
};

module.exports = userTypingMessage;
