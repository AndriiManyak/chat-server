const Message = require('../../entities/Message');

const receiveMessage = (io, socket, currentChat) => {
    socket.on('receive_message', messageData => {
        const newMessage = new Message(messageData);

        io.to(currentChat.id).emit('send_message', newMessage);
        currentChat.addMessage(newMessage);
    });
};

module.exports = receiveMessage;
