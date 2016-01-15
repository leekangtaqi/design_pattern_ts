var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarFactory = (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createTire = function () { };
    CarFactory.prototype.createEngine = function () { };
    return CarFactory;
})();
var CarFactoryA = (function (_super) {
    __extends(CarFactoryA, _super);
    function CarFactoryA() {
        _super.apply(this, arguments);
    }
    CarFactoryA.prototype.createTire = function () {
        return new TireA();
    };
    CarFactoryA.prototype.createEngine = function () {
        return new EngineA();
    };
    return CarFactoryA;
})(CarFactory);
var CarFactoryB = (function (_super) {
    __extends(CarFactoryB, _super);
    function CarFactoryB() {
        _super.apply(this, arguments);
    }
    CarFactoryB.prototype.createTire = function () {
        return new TireB();
    };
    CarFactoryB.prototype.createEngine = function () {
        return new EngineB();
    };
    return CarFactoryB;
})(CarFactory);
var Tire = (function () {
    function Tire() {
    }
    return Tire;
})();
var TireA = (function (_super) {
    __extends(TireA, _super);
    function TireA() {
        _super.apply(this, arguments);
    }
    TireA.prototype.loop = function () {
        console.log('tire a is looping');
    };
    return TireA;
})(Tire);
var TireB = (function (_super) {
    __extends(TireB, _super);
    function TireB() {
        _super.apply(this, arguments);
    }
    TireB.prototype.loop = function () {
        console.log('tire b is looping');
    };
    return TireB;
})(Tire);
var Engine = (function () {
    function Engine() {
    }
    return Engine;
})();
var EngineA = (function (_super) {
    __extends(EngineA, _super);
    function EngineA() {
        _super.apply(this, arguments);
    }
    EngineA.prototype.start = function () {
        console.log('engine a is starting');
    };
    return EngineA;
})(Engine);
var EngineB = (function (_super) {
    __extends(EngineB, _super);
    function EngineB() {
        _super.apply(this, arguments);
    }
    EngineB.prototype.start = function () {
        console.log('engine b is starting');
    };
    return EngineB;
})(Engine);
var carfactory = new CarFactoryA();
var tire = carfactory.createTire();
var engine = carfactory.createEngine();
tire.loop();
engine.start();
/**
 * Adapt to an interface, so that it can be compatible with the external
 */
var Target = (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        console.log('plain request...');
    };
    return Target;
})();
var Adapter = (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        _super.apply(this, arguments);
        this.adaptee = new Adaptee();
    }
    Adapter.prototype.request = function () {
        this.adaptee.specificRequest();
    };
    return Adapter;
})(Target);
var Adaptee = (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        console.log('special request...');
    };
    return Adaptee;
})();
var target = new Adapter();
target.request();
/**
 * intention: Separating the abstraction and Implementation
 */
var Abstract = (function () {
    function Abstract() {
    }
    Abstract.prototype.setImplementation = function (implementation) {
        this.implementation = implementation;
    };
    Abstract.prototype.operate = function () {
        this.implementation.operate();
    };
    return Abstract;
})();
var RefinedAbstract = (function (_super) {
    __extends(RefinedAbstract, _super);
    function RefinedAbstract() {
        _super.call(this);
    }
    RefinedAbstract.prototype.operate = function () {
        _super.prototype.operate.call(this);
    };
    return RefinedAbstract;
})(Abstract);
var Implementation = (function () {
    function Implementation() {
    }
    return Implementation;
})();
var ImplementationA = (function (_super) {
    __extends(ImplementationA, _super);
    function ImplementationA() {
        _super.apply(this, arguments);
    }
    ImplementationA.prototype.operate = function () {
        console.log('implementation a ...');
    };
    return ImplementationA;
})(Implementation);
var ImplementationB = (function (_super) {
    __extends(ImplementationB, _super);
    function ImplementationB() {
        _super.apply(this, arguments);
    }
    ImplementationB.prototype.operate = function () {
        console.log('implementation b ...');
    };
    return ImplementationB;
})(Implementation);
var refinedAbstract = new RefinedAbstract();
var implementationA = new ImplementationA();
refinedAbstract.setImplementation(implementationA);
refinedAbstract.operate();
var implementationB = new ImplementationB();
refinedAbstract.setImplementation(implementationB);
refinedAbstract.operate();
/**
 * For create complicated instance
 */
var Product = (function () {
    function Product() {
        this.parts = [];
    }
    ;
    Product.prototype.addPart = function (part) {
        this.parts.push(part);
    };
    Product.prototype.show = function () {
        this.parts.forEach(function (part) {
            console.log(part);
        });
    };
    return Product;
})();
var ProductBuilder = (function () {
    function ProductBuilder() {
    }
    return ProductBuilder;
})();
var ConcreteProductBuilder = (function (_super) {
    __extends(ConcreteProductBuilder, _super);
    function ConcreteProductBuilder() {
        _super.call(this);
    }
    ConcreteProductBuilder.prototype.addPartA = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.addPartB = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.addPartC = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.build = function () {
        this.product = new Product();
        this.addPartA('part1');
        this.addPartB('part2');
        this.addPartC('part3');
        return this.product;
    };
    return ConcreteProductBuilder;
})(ProductBuilder);
var builder = new ConcreteProductBuilder();
var product = builder.build();
product.show();
var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.setSuccessor = function (successor) {
        this.successor = successor;
    };
    return Handler;
})();
var HandlerA = (function (_super) {
    __extends(HandlerA, _super);
    function HandlerA() {
        _super.call(this);
    }
    HandlerA.prototype.handle = function (num) {
        if (num) {
            if (num < 10) {
                console.log('request is handled by a!');
            }
        }
        else {
            this.successor.handle(num);
        }
    };
    return HandlerA;
})(Handler);
var HandlerB = (function (_super) {
    __extends(HandlerB, _super);
    function HandlerB() {
        _super.call(this);
    }
    HandlerB.prototype.handle = function (num) {
        if (num) {
            if (num < 50) {
                console.log('request is handled by b!');
            }
        }
        else {
            this.successor.handle(num);
        }
    };
    return HandlerB;
})(Handler);
var HandlerC = (function (_super) {
    __extends(HandlerC, _super);
    function HandlerC() {
        _super.call(this);
    }
    HandlerC.prototype.handle = function (num) {
        console.log('request is handled by c!');
    };
    return HandlerC;
})(Handler);
var handlerA = new HandlerA();
var handlerB = new HandlerB();
var handlerC = new HandlerC();
handlerA.setSuccessor(handlerB);
handlerB.setSuccessor(handlerC);
handlerA.handle(5);
handlerA.handle(30);
handlerA.handle(100);
var Invoker = (function () {
    function Invoker() {
        this.cmds = [];
    }
    Invoker.prototype.accept = function (cmd) {
        this.cmds.push(cmd);
    };
    Invoker.prototype.execute = function () {
        this.cmds.forEach(function (cmd) {
            cmd.execute();
        });
    };
    return Invoker;
})();
var Command = (function () {
    function Command(receiver) {
        this.receiver = receiver;
    }
    return Command;
})();
var ConcreteCommand = (function (_super) {
    __extends(ConcreteCommand, _super);
    function ConcreteCommand(receiver) {
        _super.call(this, receiver);
    }
    ConcreteCommand.prototype.execute = function () {
        this.receiver.action();
    };
    return ConcreteCommand;
})(Command);
var Receiver = (function () {
    function Receiver() {
    }
    Receiver.prototype.action = function () {
        console.log('receiver do some actions...');
    };
    return Receiver;
})();
var invoker = new Invoker();
var receiver = new Receiver();
var cmd = new ConcreteCommand(receiver);
invoker.accept(cmd);
invoker.execute();
var Component = (function () {
    function Component() {
    }
    Component.prototype.display = function (depth) {
        console.log((function () {
            var result = '';
            for (var i = 0; i < depth; i++) {
                result += '-';
            }
            return result;
        })() + this._name);
    };
    ;
    return Component;
})();
var Composite = (function (_super) {
    __extends(Composite, _super);
    function Composite(name) {
        _super.call(this);
        this._name = name;
        this._children = [];
    }
    Object.defineProperty(Composite.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Composite.prototype.add = function (component) {
        this._children.push(component);
        return this;
    };
    Composite.prototype.remove = function (component) {
        var _this = this;
        this._children.forEach(function (c, index) {
            (c === component) && _this._children.splice(index, 1);
        });
    };
    Composite.prototype.display = function (depth) {
        _super.prototype.display.call(this, depth);
        this._children.forEach(function (c, index) {
            c.display(depth + 1);
        });
    };
    return Composite;
})(Component);
var Leaf = (function (_super) {
    __extends(Leaf, _super);
    function Leaf(name) {
        _super.call(this);
        this._name = name;
    }
    Object.defineProperty(Leaf.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Leaf.prototype.add = function (component) {
        console.log('nothing to do');
        return;
    };
    Leaf.prototype.remove = function (component) {
        console.log('nothing to do');
    };
    Leaf.prototype.display = function (depth) {
        _super.prototype.display.call(this, depth);
    };
    return Leaf;
})(Component);
var root = new Composite('root');
var leafA = new Leaf('leafA');
var compositeA = new Composite('compositeA');
var compositeB = new Composite('compositeB');
var compositeAA = new Composite('compositeAA');
var compositeAB = new Composite('compositeAB');
var leafAA = new Leaf('leafAA');
var leafBA = new Leaf('leafBA');
var compositeBA = new Composite('compositeBA');
root.add(leafA).add(compositeA).add(compositeB);
compositeA.add(compositeAA).add(compositeAB).add(leafAA);
compositeB.add(leafBA);
root.display(1);
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
var FactoryA = (function () {
    function FactoryA() {
    }
    FactoryA.prototype.createProduct = function () {
        return new ProductA();
    };
    return FactoryA;
})();
var FactoryB = (function () {
    function FactoryB() {
    }
    FactoryB.prototype.createProduct = function () {
        return new ProductB();
    };
    return FactoryB;
})();
var Product = (function () {
    function Product() {
    }
    return Product;
})();
var ProductA = (function (_super) {
    __extends(ProductA, _super);
    function ProductA() {
        _super.apply(this, arguments);
    }
    return ProductA;
})(Product);
var ProductB = (function (_super) {
    __extends(ProductB, _super);
    function ProductB() {
        _super.apply(this, arguments);
    }
    return ProductB;
})(Product);
var factory = new FactoryA();
var product = factory.createProduct();
console.log(product instanceof ProductA);
var FlyweightFactory = (function () {
    function FlyweightFactory() {
        this.flyweightHashMap = {};
    }
    FlyweightFactory.prototype.getFlyweight = function (type) {
        if (!this.flyweightHashMap[type]) {
            this.flyweightHashMap[type] = new ConcreteFlyweight();
        }
        return this.flyweightHashMap[type];
    };
    FlyweightFactory.prototype.getCount = function () {
        console.log('instance count is ' + Object.keys(this.flyweightHashMap).length);
    };
    return FlyweightFactory;
})();
var Flyweight = (function () {
    function Flyweight() {
    }
    return Flyweight;
})();
var ConcreteFlyweight = (function (_super) {
    __extends(ConcreteFlyweight, _super);
    function ConcreteFlyweight() {
        _super.apply(this, arguments);
    }
    ConcreteFlyweight.prototype.operate = function (externalStatus) {
        console.log('get external status --' + externalStatus);
    };
    return ConcreteFlyweight;
})(Flyweight);
var UnShareConcreteFlyweight = (function (_super) {
    __extends(UnShareConcreteFlyweight, _super);
    function UnShareConcreteFlyweight() {
        _super.apply(this, arguments);
    }
    UnShareConcreteFlyweight.prototype.operate = function (externalStatus) {
        console.log('get external status --' + externalStatus);
    };
    return UnShareConcreteFlyweight;
})(Flyweight);
var externalStatus = 10;
var flyweightFactory = new FlyweightFactory();
var flyweightAA = flyweightFactory.getFlyweight('a');
flyweightAA.operate(externalStatus--);
var flyweightAB = flyweightFactory.getFlyweight('a');
flyweightAB.operate(externalStatus--);
var flyweightBA = flyweightFactory.getFlyweight('b');
flyweightBA.operate(externalStatus--);
var flyweightBB = flyweightFactory.getFlyweight('b');
flyweightBB.operate(externalStatus--);
flyweightFactory.getCount();
var MyContext = (function () {
    function MyContext() {
    }
    return MyContext;
})();
var AbstractExpression = (function () {
    function AbstractExpression() {
    }
    return AbstractExpression;
})();
var TerminalExpression = (function (_super) {
    __extends(TerminalExpression, _super);
    function TerminalExpression() {
        _super.apply(this, arguments);
    }
    TerminalExpression.prototype.interpreter = function (context) {
        console.log('output is ' + (context.input + 1));
    };
    return TerminalExpression;
})(AbstractExpression);
var NonTerminalExpression = (function (_super) {
    __extends(NonTerminalExpression, _super);
    function NonTerminalExpression() {
        _super.apply(this, arguments);
    }
    NonTerminalExpression.prototype.interpreter = function (context) {
        console.log('this is a nonTerminal expression recur regulars');
    };
    return NonTerminalExpression;
})(AbstractExpression);
var context = new MyContext();
context.input = 0;
// 1 plus expression
var onePlusTerminalExpression = new TerminalExpression();
onePlusTerminalExpression.interpreter(context);
var Mediator = (function () {
    function Mediator() {
    }
    return Mediator;
})();
var ConcreteMediator = (function (_super) {
    __extends(ConcreteMediator, _super);
    function ConcreteMediator() {
        _super.call(this);
    }
    Object.defineProperty(ConcreteMediator.prototype, "concreteColleagueA", {
        set: function (concreteColleagueA) {
            this._concreteColleagueA = concreteColleagueA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcreteMediator.prototype, "concreteColleagueB", {
        set: function (concreteColleagueB) {
            this._concreteColleagueB = concreteColleagueB;
        },
        enumerable: true,
        configurable: true
    });
    ConcreteMediator.prototype.send = function (txt, colleague) {
        if (colleague === this._concreteColleagueA) {
            this._concreteColleagueB.receive(txt);
        }
        else {
            console.log(colleague);
            this._concreteColleagueA.receive(txt);
        }
    };
    return ConcreteMediator;
})(Mediator);
var Colleague = (function () {
    function Colleague() {
        this.mediator = new ConcreteMediator();
    }
    return Colleague;
})();
var ConcreteColleagueA = (function (_super) {
    __extends(ConcreteColleagueA, _super);
    function ConcreteColleagueA() {
        _super.call(this);
    }
    ConcreteColleagueA.prototype.send = function (txt) {
        this.mediator.send(txt, this);
    };
    ConcreteColleagueA.prototype.receive = function (txt) {
        console.log('colleague A received ' + txt);
    };
    return ConcreteColleagueA;
})(Colleague);
var ConcreteColleagueB = (function (_super) {
    __extends(ConcreteColleagueB, _super);
    function ConcreteColleagueB() {
        _super.call(this);
    }
    ConcreteColleagueB.prototype.send = function (txt) {
        this.mediator.send(txt, this);
    };
    ConcreteColleagueB.prototype.receive = function (txt) {
        console.log('colleague B received ' + txt);
    };
    return ConcreteColleagueB;
})(Colleague);
var concreteColleagueA = new ConcreteColleagueA();
var concreteColleagueB = new ConcreteColleagueB();
var concreteMediator = new ConcreteMediator();
concreteMediator.concreteColleagueA = concreteColleagueA;
concreteMediator.concreteColleagueB = concreteColleagueB;
concreteColleagueA.send('hello');
var Originator = (function () {
    function Originator() {
        this._status = 'stopped';
    }
    Originator.prototype.createMememto = function () {
        return new Mememto(this._status);
    };
    Originator.prototype.setMememto = function (mememto) {
        this._status = mememto.status;
    };
    Object.defineProperty(Originator.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    return Originator;
})();
var Mememto = (function () {
    function Mememto(stauts) {
        this._status = stauts;
    }
    Object.defineProperty(Mememto.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    return Mememto;
})();
var CareTaker = (function () {
    function CareTaker() {
    }
    Object.defineProperty(CareTaker.prototype, "mememto", {
        get: function () {
            return this._mememto;
        },
        set: function (mememto) {
            this._mememto = mememto;
        },
        enumerable: true,
        configurable: true
    });
    return CareTaker;
})();
var originator = new Originator();
var careTaker = new CareTaker();
console.log(originator.status);
var mememto = originator.createMememto();
careTaker.mememto = mememto;
originator.status = 'starting';
console.log(originator.status);
originator.setMememto(careTaker.mememto);
console.log(originator.status);
var Subject = (function () {
    function Subject() {
    }
    return Subject;
})();
var RealSubject = (function (_super) {
    __extends(RealSubject, _super);
    function RealSubject() {
        _super.call(this);
        this.observers = [];
    }
    RealSubject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    RealSubject.prototype.detach = function (observer) {
        var _this = this;
        this.observers.forEach(function (o, index) {
            o === observer && _this.observers.splice(index, 1);
        });
    };
    RealSubject.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (o) {
            o.update(_this.action);
        });
    };
    return RealSubject;
})(Subject);
var Observer = (function () {
    function Observer() {
    }
    return Observer;
})();
var RealObserver = (function (_super) {
    __extends(RealObserver, _super);
    function RealObserver() {
        _super.apply(this, arguments);
    }
    RealObserver.prototype.update = function (action) {
        console.log('subject current status is ' + action);
    };
    return RealObserver;
})(Observer);
var subject = new RealSubject();
var observerA = new RealObserver();
var observerB = new RealObserver();
subject.attach(observerA);
subject.attach(observerB);
subject.action = 'starting';
subject.notify();
subject.action = 'stopping';
subject.detach(observerA);
subject.notify();
var PrototypeA = (function () {
    function PrototypeA() {
        this._name = 'test';
    }
    ;
    PrototypeA.prototype.clone = function () {
        var proto = new PrototypeA();
        for (var prop in this) {
            proto[prop] = this[prop];
        }
        return new PrototypeA();
    };
    return PrototypeA;
})();
var protoA = new PrototypeA();
var protoB = protoA.clone();
console.log(protoA);
console.log(protoB);
console.log(protoA === protoB);
var RealSubject = (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('real request...');
    };
    return RealSubject;
})();
var Proxy = (function () {
    function Proxy() {
        this.realSubject = new RealSubject();
    }
    Proxy.prototype.request = function () {
        console.log('do some else...');
        this.realSubject.request();
        console.log('do some else...');
    };
    return Proxy;
})();
var proxy = new Proxy();
proxy.request();
/**
 * intention: 隐藏实例创建的细节
 */
var SimpleFactory = (function () {
    function SimpleFactory() {
    }
    ;
    SimpleFactory.prototype.createProduct = function (type) {
        switch (type) {
            case 'a':
                return new ProductA();
            case 'b':
                return new ProductB();
        }
    };
    return SimpleFactory;
})();
var Product = (function () {
    function Product() {
    }
    return Product;
})();
var ProductA = (function (_super) {
    __extends(ProductA, _super);
    function ProductA() {
        _super.apply(this, arguments);
    }
    ProductA.prototype.dosomething = function () {
        console.log('product a do some thing');
    };
    return ProductA;
})(Product);
var ProductB = (function (_super) {
    __extends(ProductB, _super);
    function ProductB() {
        _super.apply(this, arguments);
    }
    ProductB.prototype.dosomething = function () {
        console.log('product b do some thing');
    };
    return ProductB;
})(Product);
var factory = new SimpleFactory();
var productA = factory.createProduct('a');
var productB = factory.createProduct('b');
productA.dosomething();
productB.dosomething();
var Singleton = (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
})();
var instanceA = Singleton.getInstance();
var instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
/**
 * When an object's internal state changes, it is allowed to change its behavior.
 * This object looks like change its class
 */
var Context = (function () {
    function Context(state) {
        this.state = state;
    }
    Object.defineProperty(Context.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.request = function () {
        this._state.handle(this);
    };
    return Context;
})();
var State = (function () {
    function State() {
    }
    return State;
})();
var StateA = (function (_super) {
    __extends(StateA, _super);
    function StateA() {
        _super.apply(this, arguments);
    }
    StateA.prototype.handle = function (context) {
        console.log('state a...');
        context.state = new StateB();
    };
    return StateA;
})(State);
var StateB = (function (_super) {
    __extends(StateB, _super);
    function StateB() {
        _super.apply(this, arguments);
    }
    StateB.prototype.handle = function (context) {
        console.log('state b...');
        context.state = new StateA();
    };
    return StateB;
})(State);
var context = new Context(new StateA());
context.request();
context.request();
context.request();
/**
 * intention: Define a series of related algorithms, allow them can be replaced with each other
 */
var Strategy = (function () {
    function Strategy() {
    }
    return Strategy;
})();
var Context = (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.calculate = function () {
        this.strategy.calculate();
    };
    Object.defineProperty(Context.prototype, "strategy", {
        get: function () {
            return this._strategy;
        },
        set: function (strategy) {
            this._strategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    return Context;
})();
var StrategyA = (function (_super) {
    __extends(StrategyA, _super);
    function StrategyA() {
        _super.apply(this, arguments);
    }
    StrategyA.prototype.calculate = function () {
        console.log('a');
    };
    return StrategyA;
})(Strategy);
var StrategyB = (function (_super) {
    __extends(StrategyB, _super);
    function StrategyB() {
        _super.apply(this, arguments);
    }
    StrategyB.prototype.calculate = function () {
        console.log('b');
    };
    return StrategyB;
})(Strategy);
var context = new Context(new StrategyA());
context.calculate();
context.strategy = new StrategyB();
context.calculate();
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
var Visitor = (function () {
    function Visitor(name) {
        this.name = name;
    }
    return Visitor;
})();
var ConcreteVisitorA = (function (_super) {
    __extends(ConcreteVisitorA, _super);
    function ConcreteVisitorA(name) {
        _super.call(this, name);
    }
    ConcreteVisitorA.prototype.visitConcreteElementA = function (concreteElementA) {
        console.log('elementA is visited by ' + this.name);
    };
    ConcreteVisitorA.prototype.visitConcreteElementB = function (concreteElementB) {
        console.log('elementB is visited by ' + this.name);
    };
    return ConcreteVisitorA;
})(Visitor);
var ConcreteVisitorB = (function (_super) {
    __extends(ConcreteVisitorB, _super);
    function ConcreteVisitorB(name) {
        _super.call(this, name);
    }
    ConcreteVisitorB.prototype.visitConcreteElementA = function (concreteElementA) {
        console.log('elementA is visited by ' + this.name);
    };
    ConcreteVisitorB.prototype.visitConcreteElementB = function (concreteElementB) {
        console.log('elementB is visited by ' + this.name);
    };
    return ConcreteVisitorB;
})(Visitor);
var ObjectStructure = (function () {
    function ObjectStructure() {
        this.els = [];
    }
    ObjectStructure.prototype.attach = function (el) {
        this.els.push(el);
    };
    ObjectStructure.prototype.detach = function (el) {
        var _this = this;
        this.els.forEach(function (elInEls, index) {
            elInEls === el && _this.els.splice(index, 1);
        });
    };
    ObjectStructure.prototype.accept = function (visitor) {
        this.els.forEach(function (el) {
            el.accept(visitor);
        });
    };
    return ObjectStructure;
})();
var MyElement = (function () {
    function MyElement(name) {
        this.name = name;
    }
    return MyElement;
})();
var ConcreteElementA = (function (_super) {
    __extends(ConcreteElementA, _super);
    function ConcreteElementA(name) {
        _super.call(this, name);
    }
    ConcreteElementA.prototype.accept = function (visitor) {
        visitor.visitConcreteElementA(this);
    };
    ConcreteElementA.prototype.operate = function () {
        //TODO
    };
    return ConcreteElementA;
})(MyElement);
var ConcreteElementB = (function (_super) {
    __extends(ConcreteElementB, _super);
    function ConcreteElementB(name) {
        _super.call(this, name);
    }
    ConcreteElementB.prototype.accept = function (visitor) {
        visitor.visitConcreteElementB(this);
    };
    ConcreteElementB.prototype.operate = function () {
        //TODO
    };
    return ConcreteElementB;
})(MyElement);
var objs = new ObjectStructure();
var elementA = new ConcreteElementA('elA');
var elementB = new ConcreteElementA('elB');
objs.attach(elementA);
objs.attach(elementB);
var visitorA = new ConcreteVisitorA('visitorA');
var visitorB = new ConcreteVisitorB('visitorB');
objs.accept(visitorA);
objs.accept(visitorB);
//# sourceMappingURL=*.js.map