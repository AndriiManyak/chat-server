const generateRandomName = require('../utils/generateRandomName');

class User {
    static idCounter = 1;

    constructor() {
        this.name = generateRandomName();
        this.description = 'new user description';
        this.image = 'https://i.ibb.co/FzL4CmY/user-image.png';
        this.id = User.idCounter;
        this.isOnline = true;

        User.idCounter++;
    };

    goOnline() {
        this.isOnline = true;
    };

    goOffline() {
        this.isOnline = false;
    };
}

module.exports = User;
