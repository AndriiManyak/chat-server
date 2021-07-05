const receiveMessage = require('./receiveMessage');
const defineChat = require('../../utils/defineChat');
const Chat = require('../../entities/Chat');

const joinChat = (io, socket, currentUser, chats) => {
    let currentChat;

    socket.on('join_chat', connectedUser => {
        const definedChat = defineChat(chats, currentUser, connectedUser);

        if (definedChat) {
            currentChat = definedChat
        } else {
            const newChat = new Chat(currentUser.id, connectedUser.id);
            chats.push(newChat);
            currentChat = newChat;
        }

        socket.join(currentChat.id);
        receiveMessage(io, socket, currentChat);
    });
};

module.exports = joinChat;
