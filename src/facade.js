class SubsystemA {
    methodA() {
        console.log('system method A is invoked');
    }
}
class SubsystemB {
    methodB() {
        console.log('system method B is invoked');
    }
}
class Facade {
    constructor() {
        this.subSystemA = new SubsystemA();
        this.subSystemB = new SubsystemB();
    }
    method() {
        this.subSystemA.methodA();
        this.subSystemB.methodB();
    }
}
var facade = new Facade();
facade.method();
//# sourceMappingURL=facade.js.map