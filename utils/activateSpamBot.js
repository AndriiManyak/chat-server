const defineChat = require("./defineChat");
const spamBot = require("../bots/spamBot");
const Chat = require("../entities/Chat");
const createRandomMessage = require("./createRandomMessage");
const getRandomNumber = require("./getRandomNumber");

const activateSpamBot = (io, currentUser, chats) => {
    let currentChat = defineChat(chats, currentUser, spamBot);

    if (!currentChat) {
        const newChat = new Chat(currentUser.id, spamBot.id);
        chats.push(newChat);
        currentChat = newChat;
    }

    const sendMessageWithInterval = () => {
        setTimeout(() => {
            const message = createRandomMessage(currentUser, spamBot);
            io.to(currentChat.id).emit('receive_message', message);
            currentChat.addMessage(message);

            if (currentUser.isOnline) {
                sendMessageWithInterval();
            }
        }, getRandomNumber(10, 120) * 1000)
    };

    sendMessageWithInterval();
};

module.exports = activateSpamBot;
