const generateRandomName = require('../utils/generateRandomName');

class User {
    static idCounter = 1;

    constructor(sockedId) {
        this.name = generateRandomName();
        this.description = 'new user description';
        this.image = 'https://i.ibb.co/FzL4CmY/user-image.png';
        this.id = User.idCounter;
        this.isOnline = true;
        this.socketId = sockedId

        User.idCounter++;
    };

    goOnline() {
        this.isOnline = true;
    };

    goOffline() {
        this.isOnline = false;
    };

    setSocketId(sockedId) {
        this.sockedId = sockedId;
    };
}

module.exports = User;
