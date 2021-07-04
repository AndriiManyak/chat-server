class User {
    static idCounter = 1;

    constructor(sockedId) {
        this.name = 'new user';
        this.description = 'new user description';
        this.image = 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg';
        this.id = User.idCounter;
        this.isOnline = false;
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
