const sendMessage = require('./sendMessage');
const defineChat = require('../../utils/defineChat');
const Chat = require('../../entities/Chat');

const joinChat = (io, socket, currentUser, chats) => {
    let currentChat;

    socket.on('join_chat', connectedUser => {
        const definedChat = defineChat(chats, currentUser, connectedUser);

        socket.removeAllListeners('send_message');

        if (definedChat) {
            currentChat = definedChat
        } else {
            const newChat = new Chat(currentUser.id, connectedUser.id);
            chats.push(newChat);
            currentChat = newChat;
        }

        socket.join(currentChat.id);
        socket.emit('receive_messages', currentChat.messages);
        sendMessage(io, socket, currentChat);
    });
};

module.exports = joinChat;
