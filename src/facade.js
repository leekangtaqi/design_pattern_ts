var SubsystemA = (function () {
    function SubsystemA() {
    }
    SubsystemA.prototype.methodA = function () {
        console.log('system method A is invoked');
    };
    return SubsystemA;
})();
var SubsystemB = (function () {
    function SubsystemB() {
    }
    SubsystemB.prototype.methodB = function () {
        console.log('system method B is invoked');
    };
    return SubsystemB;
})();
var Facade = (function () {
    function Facade() {
        this.subSystemA = new SubsystemA();
        this.subSystemB = new SubsystemB();
    }
    Facade.prototype.method = function () {
        this.subSystemA.methodA();
        this.subSystemB.methodB();
    };
    return Facade;
})();
var facade = new Facade();
facade.method();
//# sourceMappingURL=facade.js.map