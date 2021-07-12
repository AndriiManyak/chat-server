const Message = require('../entities/Message');
const makeMessagesSeen = require("./makeMessagesSeen");

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

            const changedMessages = makeMessagesSeen(chat, bot.id);
            chat.addMessage(newMessage);

            if (changedMessages > 0) {
                socket.emit('receive_messages', chat.messages);
            } else {
                socket.emit('receive_message', newMessage);
            }

            break;
        }
        case 'reverseBot': {
            const messageData = {
                author: bot,
                receiver: author,
                text: text.split('').reverse().join(''),
            };

            const changedMessages = makeMessagesSeen(chat, bot.id);
            const newMessage = new Message(messageData);
            chat.addMessage(newMessage);

            setTimeout(() => {
                if (changedMessages > 0) {
                    socket.emit('receive_messages', chat.messages);
                } else {
                    socket.emit('receive_message', newMessage);
                }
            }, 3000);

            break;
        }
        default: break;
    }
};

module.exports = handleBotReceiveMessage;
