var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractClass = (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.operationA = function () { };
    AbstractClass.prototype.operationB = function () { };
    AbstractClass.prototype.templateMethod = function () {
        this.operationA();
        console.log('some template...');
        this.operationB();
    };
    return AbstractClass;
})();
var ConcreteClassA = (function (_super) {
    __extends(ConcreteClassA, _super);
    function ConcreteClassA() {
        _super.apply(this, arguments);
    }
    ConcreteClassA.prototype.operationA = function () {
        console.log('implementation a -> operation a');
    };
    ConcreteClassA.prototype.operationB = function () {
        console.log('implementation a -> operation b');
    };
    return ConcreteClassA;
})(AbstractClass);
var ConcreteClassB = (function (_super) {
    __extends(ConcreteClassB, _super);
    function ConcreteClassB() {
        _super.apply(this, arguments);
    }
    ConcreteClassB.prototype.operationA = function () {
        console.log('implementation b -> operation a');
    };
    ConcreteClassB.prototype.operationB = function () {
        console.log('implementation b -> operation b');
    };
    return ConcreteClassB;
})(AbstractClass);
var templateObjA = new ConcreteClassA();
var templateObjB = new ConcreteClassB();
templateObjA.templateMethod();
console.log("**************");
templateObjB.templateMethod();
//# sourceMappingURL=template.js.map