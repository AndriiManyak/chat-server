const Message = require('../../entities/Message');
const handleBotReceiveMessage = require("../../utils/handleBotReceiveMessage");
const makeMessagesSeen = require("../../utils/makeMessagesSeen");

const sendMessage = (io, socket, chat) => {
    socket.on('send_message', messageData => {
        const newMessage = new Message(messageData);
        const {receiver, author} = messageData;

        const changedMessages = makeMessagesSeen(chat, author);

        if (receiver.type === 'bot') {
            chat.addMessage(newMessage);
            handleBotReceiveMessage(socket, messageData, chat);
        } else {
            chat.addMessage(newMessage);

            if (changedMessages > 0) {
                socket.broadcast.to(chat.id).emit('receive_messages', chat.messages);
            } else {
                socket.broadcast.to(chat.id).emit('receive_message', newMessage);
            }
        }
    });
};

module.exports = sendMessage;
