class Visitor {
    constructor(name) {
        this.name = name;
    }
}
class ConcreteVisitorA extends Visitor {
    constructor(name) {
        super(name);
    }
    visitConcreteElementA(concreteElementA) {
        console.log('elementA is visited by ' + this.name);
    }
    visitConcreteElementB(concreteElementB) {
        console.log('elementB is visited by ' + this.name);
    }
}
class ConcreteVisitorB extends Visitor {
    constructor(name) {
        super(name);
    }
    visitConcreteElementA(concreteElementA) {
        console.log('elementA is visited by ' + this.name);
    }
    visitConcreteElementB(concreteElementB) {
        console.log('elementB is visited by ' + this.name);
    }
}
class ObjectStructure {
    constructor() {
        this.els = [];
    }
    attach(el) {
        this.els.push(el);
    }
    detach(el) {
        this.els.forEach((elInEls, index) => {
            elInEls === el && this.els.splice(index, 1);
        });
    }
    accept(visitor) {
        this.els.forEach((el) => {
            el.accept(visitor);
        });
    }
}
class MyElement {
    constructor(name) {
        this.name = name;
    }
}
class ConcreteElementA extends MyElement {
    constructor(name) {
        super(name);
    }
    accept(visitor) {
        visitor.visitConcreteElementA(this);
    }
    operate() {
        //TODO
    }
}
class ConcreteElementB extends MyElement {
    constructor(name) {
        super(name);
    }
    accept(visitor) {
        visitor.visitConcreteElementB(this);
    }
    operate() {
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
//# sourceMappingURL=visitor.js.map