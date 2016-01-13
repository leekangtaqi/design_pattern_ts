class SubsystemA{
    methodA(){
        console.log('system method A is invoked');
    }
}
class SubsystemB{
    methodB(){
        console.log('system method B is invoked');
    }
}
class Facade{
    subSystemA: SubsystemA = new SubsystemA();
    subSystemB: SubsystemB = new SubsystemB();
    method(){
        this.subSystemA.methodA();
        this.subSystemB.methodB();
    }
}
var facade = new Facade();
facade.method();
