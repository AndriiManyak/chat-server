const {v4} = require("uuid");

class Message {
    constructor(messageData) {
        this.id = v4();
        this.author = messageData.author;
        this.text = messageData.text;
        this.time = new Date();
        this.receiver = messageData.receiver;
    };

    setSeenTime() {
        this.seenTime = new Date();
    };
}

module.exports = Message;
