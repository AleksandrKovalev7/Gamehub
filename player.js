const Subscriber = require('./observer');
class Player extends Subscriber {
    constructor(player_id, username, email) {
        super();
        this.player_id = player_id;
        this.username = username;
        this.email = email;
    }

    receiveNotification(message) {}
}
module.exports = Player;