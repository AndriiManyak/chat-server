const defineChat = (chats, currentUser, connectedUser) => {
    return chats.find(chat => chat.id === `${connectedUser.id}&&${currentUser.id}` || chat.id === `${currentUser.id}&&${connectedUser.id}` )
};

module.exports = defineChat;
