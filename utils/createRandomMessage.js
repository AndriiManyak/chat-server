const Message = require("../entities/Message");
const parseTime = require("./parseTime");
const {v4} = require("uuid");

const createRandomMessage = (receiver, author) => {
    const messageData = {
        author,
        text: v4(),
        receiver,
    };

    return  new Message(messageData);
};

module.exports = createRandomMessage;
