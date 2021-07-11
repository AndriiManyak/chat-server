class Message {
    constructor(messageData) {
        this.id = messageData.id;
        this.author = messageData.author;
        this.text = messageData.text;
        this.time = messageData.time;
        this.receiver = messageData.receiver;
    };

    setSeenTime() {
        this.seenTime = new Date();
    };
}

module.exports = Message;
