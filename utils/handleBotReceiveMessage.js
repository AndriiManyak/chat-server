const Message = require('../entities/Message');
const parseTime = require("./parseTime");
const {v4} = require("uuid");

const handleBotReceiveMessage = (socket, message, chat) => {
    const {receiver: bot, text} = message;

    switch (bot.id) {
        case 'echoBot': {
            const messageData = {
                id: v4(),
                author: bot,
                text: text,
                time: parseTime(new Date())
            };

            const newMessage = new Message(messageData);
            socket.emit('receive_message', newMessage);
            chat.addMessage(newMessage);

            break;
        }
        case 'reverseBot': {
            const messageData = {
                id: v4(),
                author: bot,
                text: text.split('').reverse().join(''),
                time: parseTime(new Date())
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
