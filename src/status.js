/**
 * When an object's internal state changes, it is allowed to change its behavior.
 * This object looks like change its class
 */
class Context {
    constructor(state) {
        this.state = state;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    request() {
        this._state.handle(this);
    }
}
class State {
}
class StateA extends State {
    handle(context) {
        console.log('state a...');
        context.state = new StateB();
    }
}
class StateB extends State {
    handle(context) {
        console.log('state b...');
        context.state = new StateA();
    }
}
var context = new Context(new StateA());
context.request();
context.request();
context.request();
//# sourceMappingURL=status.js.map