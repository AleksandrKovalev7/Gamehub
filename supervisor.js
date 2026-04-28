const Subscriber = require('./observer');

class Supervisor extends Subscriber {
    constructor(supervisor_id, username) {
        super();
        this.supervisor_id = supervisor_id;
        this.username = username;
    }

    receiveNotification(message) {}
}

module.exports = Supervisor;