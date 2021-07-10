const Message = require('../../entities/Message');

const sendMessage = (io, socket, currentChat) => {
    socket.on('send_message', messageData => {
        const newMessage = new Message(messageData);
        console.log(messageData, 'new message')

        socket.broadcast.to(currentChat.id).emit('receive_message', newMessage);
        currentChat.addMessage(newMessage);
    });
};

module.exports = sendMessage;
