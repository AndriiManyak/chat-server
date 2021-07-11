const Message = require('../entities/Message');
const parseTime = require("./parseTime");
const {v4} = require("uuid");

const handleBotReceiveMessage = (socket, message, chat) => {
    const {receiver: bot, text, author} = message;

    switch (bot.id) {
        case 'echoBot': {
            const messageData = {
                author: bot,
                receiver: author,
                text: text,
            };

            const newMessage = new Message(messageData);
            socket.emit('receive_message', newMessage);
            chat.addMessage(newMessage);

            break;
        }
        case 'reverseBot': {
            const messageData = {
                author: bot,
                receiver: author,
                text: text.split('').reverse().join(''),
            };

            const newMessage = new Message(messageData);
            chat.addMessage(newMessage);

            setTimeout(() => {
                if (socket) socket.emit('receive_message', newMessage);
            }, 3000);

            break;
        }
        default: break;
    }
};

module.exports = handleBotReceiveMessage;
