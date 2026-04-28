class SystemScheduler {
    constructor() {
        if (SystemScheduler.instance) {
            return SystemScheduler.instance;
        }
        SystemScheduler.instance = this;
    }

    timedEvents() {}
    maintenanceReboot() {}
}

module.exports = new SystemScheduler();