const Message = require("../entities/Message");
const parseTime = require("./parseTime");
const {v4} = require("uuid");

const createRandomMessage = (receiver, author) => {
    const messageData = {
        id: v4(),
        author,
        text: v4(),
        time: parseTime(new Date()),
        receiver,
    };

    return  new Message(messageData);
};

module.exports = createRandomMessage;
