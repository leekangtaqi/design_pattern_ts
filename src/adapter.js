/**
 * Adapt to an interface, so that it can be compatible with the external
 */
class Target {
    request() {
        console.log('plain request...');
    }
}
class Adapter extends Target {
    constructor(...args) {
        super(...args);
        this.adaptee = new Adaptee();
    }
    request() {
        this.adaptee.specificRequest();
    }
}
class Adaptee {
    specificRequest() {
        console.log('special request...');
    }
}
var target = new Adapter();
target.request();
//# sourceMappingURL=adapter.js.map