const Message = require('../../entities/Message');
const handleBotReceiveMessage = require("../../utils/handleBotReceiveMessage");

const sendMessage = (io, socket, chat) => {
    socket.on('send_message', messageData => {
        const newMessage = new Message(messageData);

        if (messageData.receiver.type === 'bot') {
            chat.addMessage(newMessage);
            handleBotReceiveMessage(socket, messageData, chat);
        } else {
            chat.addMessage(newMessage);
            socket.broadcast.to(chat.id).emit('receive_message', newMessage);
        }
    });
};

module.exports = sendMessage;
