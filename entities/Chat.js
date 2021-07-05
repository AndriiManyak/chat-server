class Chat {
    constructor(firstUser, secondUser) {
        this.id = `${firstUser}&&${secondUser}`;
        this.users = [];
        this.messages = [];
    };

    addMessage(message) {
        this.messages.push(message);
    };
}

module.exports = Chat;
