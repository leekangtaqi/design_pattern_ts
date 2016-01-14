abstract class Visitor{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract visitConcreteElementA(concreteElementA: ConcreteElementA);
    abstract visitConcreteElementB(concreteElementB: ConcreteElementB);
}
class ConcreteVisitorA extends Visitor{
    constructor(name: string){
        super(name);
    }
    visitConcreteElementA(concreteElementA: ConcreteElementA){
        console.log('elementA is visited by ' + this.name);
    }
    visitConcreteElementB(concreteElementB: ConcreteElementB){
        console.log('elementB is visited by ' + this.name);
    }
}
class ConcreteVisitorB extends Visitor{
    constructor(name: string){
        super(name);
    }
    visitConcreteElementA(concreteElementA: ConcreteElementA){
        console.log('elementA is visited by ' + this.name);
    }
    visitConcreteElementB(concreteElementB: ConcreteElementB){
        console.log('elementB is visited by ' + this.name);
    }
}
class ObjectStructure{
    els:MyElement[] = [];
    attach(el: MyElement){
        this.els.push(el);
    }
    detach(el: MyElement){
        this.els.forEach((elInEls, index)=>{
            elInEls === el && this.els.splice(index, 1);
        })
    }
    accept(visitor: Visitor){
        this.els.forEach((el)=>{
            el.accept(visitor);
        })
    }
}
abstract class MyElement{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract accept(visitor: Visitor);
}
class ConcreteElementA extends MyElement{
    constructor(name: string){
        super(name);
    }
    accept(visitor: Visitor){
        visitor.visitConcreteElementA(this);
    }
    operate(){
        //TODO
    }
}
class ConcreteElementB extends MyElement{
    constructor(name: string){
        super(name);
    }
    accept(visitor: Visitor){
        visitor.visitConcreteElementB(this);
    }
    operate(){
        //TODO
    }
}
var objs = new ObjectStructure();
var elementA = new ConcreteElementA('elA');
var elementB = new ConcreteElementA('elB');
objs.attach(elementA);
objs.attach(elementB);
var visitorA = new ConcreteVisitorA('visitorA');
var visitorB = new ConcreteVisitorB('visitorB');
objs.accept(visitorA);
objs.accept(visitorB);