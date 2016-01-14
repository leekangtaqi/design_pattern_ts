/**
 * intention: Separating the abstraction and Implementation
 */
class Abstract {
    setImplementation(implementation) {
        this.implementation = implementation;
    }
    operate() {
        this.implementation.operate();
    }
}
class RefinedAbstract extends Abstract {
    constructor() {
        super();
    }
    operate() {
        super.operate();
    }
}
class Implementation {
}
class ImplementationA extends Implementation {
    operate() {
        console.log('implementation a ...');
    }
}
class ImplementationB extends Implementation {
    operate() {
        console.log('implementation b ...');
    }
}
var refinedAbstract = new RefinedAbstract();
var implementationA = new ImplementationA();
refinedAbstract.setImplementation(implementationA);
refinedAbstract.operate();
var implementationB = new ImplementationB();
refinedAbstract.setImplementation(implementationB);
refinedAbstract.operate();
//# sourceMappingURL=bridge.js.map