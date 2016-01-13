class AbstractClass{
    operationA(){}
    operationB(){}
    templateMethod(){
        this.operationA();
        console.log('some template...');
        this.operationB();
    }
}
class ConcreteClassA extends AbstractClass{
    operationA(){
        console.log('implementation a -> operation a');
    }
    operationB(){
        console.log('implementation a -> operation b');
    }
}
class ConcreteClassB extends AbstractClass{
    operationA(){
        console.log('implementation b -> operation a');
    }
    operationB(){
        console.log('implementation b -> operation b');
    }
}
var templateObjA = new ConcreteClassA();
var templateObjB = new ConcreteClassB();
templateObjA.templateMethod();
console.log("**************");
templateObjB.templateMethod();
