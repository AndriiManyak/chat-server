const Message = require('../../entities/Message');
const handleBotReceiveMessage = require("../../utils/handleBotReceiveMessage");

const sendMessage = (io, socket, chat) => {
    socket.on('send_message', messageData => {
        const newMessage = new Message(messageData);

        if (messageData.receiver.type === 'bot') {
            handleBotReceiveMessage(socket, messageData, chat);
        } else {
            socket.broadcast.to(chat.id).emit('receive_message', newMessage);
        }

        chat.addMessage(newMessage);
    });
};

module.exports = sendMessage;
