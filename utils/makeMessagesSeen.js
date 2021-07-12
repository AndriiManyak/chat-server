const makeMessagesSeen = (chat, author) => {
    const messages = chat.messages;
    let messagesChangeCount = 0;

    for(let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].author.id === author.id) continue
        else if (messages[i].seenTime) break;

        messages[i].setSeenTime();
        messagesChangeCount++;
    }

    return messagesChangeCount;
};

module.exports = makeMessagesSeen;
