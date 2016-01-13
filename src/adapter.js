var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Adapt to an interface, so that it can be compatible with the external
 */
var Target = (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        console.log('plain request...');
    };
    return Target;
})();
var Adapter = (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        _super.apply(this, arguments);
        this.adaptee = new Adaptee();
    }
    Adapter.prototype.request = function () {
        this.adaptee.specificRequest();
    };
    return Adapter;
})(Target);
var Adaptee = (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        console.log('special request...');
    };
    return Adaptee;
})();
var target = new Adapter();
target.request();
//# sourceMappingURL=adapter.js.map