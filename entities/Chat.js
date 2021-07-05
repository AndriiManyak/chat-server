class Chat {
    constructor(firstUserId, secondUserId) {
        this.id = `${firstUserId}&&${secondUserId}`;
        this.users = [];
        this.messages = [];
    };

    addMessage(message) {
        this.messages.push(message);
    };
}

module.exports = Chat;
