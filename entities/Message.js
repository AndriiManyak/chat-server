class Message {
    constructor(messageData) {
        this.author = messageData.author;
        this.receiver = messageData.receiver
        this.text = messageData.text;
        this.time = new Date();
    };

    setSeenTime() {
        this.seenTime = new Date();
    };
}

module.exports = Message;
