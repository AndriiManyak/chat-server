class Message {
    constructor(messageData) {
        this.id = messageData.id;
        this.author = messageData.author;
        this.text = messageData.text;
        this.time = messageData.time;
    };

    setSeenTime() {
        this.seenTime = new Date();
    };
}

module.exports = Message;
