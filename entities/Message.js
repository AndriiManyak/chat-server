class Message {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.time = new Date();
    };

    setSeenTime() {
        this.seenTime = new Date();
    };
}

module.exports = Message;
