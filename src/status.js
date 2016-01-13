var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * When an object's internal state changes, it is allowed to change its behavior.
 * This object looks like change its class
 */
var Context = (function () {
    function Context(state) {
        this.state = state;
    }
    Object.defineProperty(Context.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.request = function () {
        this._state.handle(this);
    };
    return Context;
})();
var State = (function () {
    function State() {
    }
    return State;
})();
var StateA = (function (_super) {
    __extends(StateA, _super);
    function StateA() {
        _super.apply(this, arguments);
    }
    StateA.prototype.handle = function (context) {
        console.log('state a...');
        context.state = new StateB();
    };
    return StateA;
})(State);
var StateB = (function (_super) {
    __extends(StateB, _super);
    function StateB() {
        _super.apply(this, arguments);
    }
    StateB.prototype.handle = function (context) {
        console.log('state b...');
        context.state = new StateA();
    };
    return StateB;
})(State);
var context = new Context(new StateA());
context.request();
context.request();
context.request();
//# sourceMappingURL=status.js.map