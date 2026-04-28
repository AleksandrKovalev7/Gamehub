const Subject = require('./subject.js');
class Score extends Subject {
    constructor(scoreID, playerID, value, timestamp) {
        super();
        this.scoreID = scoreID;
        this.playerID = playerID;
        this.value = value;
        this.timestamp = timestamp;
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notify() {
        this.observers.forEach(o => o.update());
    }
}
module.exports = Score;