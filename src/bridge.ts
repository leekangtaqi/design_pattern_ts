/**
 * intention: Separating the abstraction and Implementation
 */
class Abstract{
    private implementation: Implementation;
    setImplementation(implementation: Implementation){
        this.implementation = implementation;
    }
    operate(){
        this.implementation.operate();
    }
}
class RefinedAbstract extends Abstract{
    constructor(){
        super();
    }
    operate(){
        super.operate()
    }
}
abstract class Implementation{
    abstract operate();
}
class ImplementationA extends Implementation{
    operate(){
        console.log('implementation a ...');
    }
}
class ImplementationB extends Implementation{
    operate(){
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