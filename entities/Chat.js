class Chat {
    constructor() {
        this.roomIdentifier = ''
        this.users = [];
        this.messages = [];
    };

    addMessage(message) {
        this.messages.push(message);
    };
}

module.exports = Chat;
