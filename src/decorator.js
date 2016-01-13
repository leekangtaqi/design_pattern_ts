var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * intention: Adding additional abilities to an object dynamically
 */
var Component = (function () {
    function Component() {
    }
    Component.prototype.operate = function () { };
    return Component;
})();
var ConcreteComponent = (function (_super) {
    __extends(ConcreteComponent, _super);
    function ConcreteComponent() {
        _super.apply(this, arguments);
    }
    ConcreteComponent.prototype.operate = function () {
        console.log('origin operation');
    };
    return ConcreteComponent;
})(Component);
var Decorator = (function (_super) {
    __extends(Decorator, _super);
    function Decorator(component) {
        _super.call(this);
        this.component = component;
    }
    Decorator.prototype.decorate = function (component) {
        this.component = component;
    };
    Decorator.prototype.operate = function () {
        this.component.operate();
    };
    return Decorator;
})(Component);
var addBehaviorDecorator = (function (_super) {
    __extends(addBehaviorDecorator, _super);
    function addBehaviorDecorator() {
        _super.apply(this, arguments);
    }
    addBehaviorDecorator.prototype.addBehavior = function () {
        console.log('behavior added');
    };
    addBehaviorDecorator.prototype.operate = function () {
        this.addBehavior();
        _super.prototype.operate.call(this);
    };
    return addBehaviorDecorator;
})(Decorator);
var component = new ConcreteComponent();
var decorator = new addBehaviorDecorator(component);
decorator.operate();
//# sourceMappingURL=decorator.js.map