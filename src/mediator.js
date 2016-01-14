class Mediator {
}
class ConcreteMediator extends Mediator {
    constructor() {
        super();
    }
    set concreteColleagueA(concreteColleagueA) {
        this._concreteColleagueA = concreteColleagueA;
    }
    set concreteColleagueB(concreteColleagueB) {
        this._concreteColleagueB = concreteColleagueB;
    }
    send(txt, colleague) {
        if (colleague === this._concreteColleagueA) {
            this._concreteColleagueB.receive(txt);
        }
        else {
            console.log(colleague);
            this._concreteColleagueA.receive(txt);
        }
    }
}
class Colleague {
    constructor() {
        this.mediator = new ConcreteMediator();
    }
}
class ConcreteColleagueA extends Colleague {
    constructor() {
        super();
    }
    send(txt) {
        this.mediator.send(txt, this);
    }
    receive(txt) {
        console.log('colleague A received ' + txt);
    }
}
class ConcreteColleagueB extends Colleague {
    constructor() {
        super();
    }
    send(txt) {
        this.mediator.send(txt, this);
    }
    receive(txt) {
        console.log('colleague B received ' + txt);
    }
}
var concreteColleagueA = new ConcreteColleagueA();
var concreteColleagueB = new ConcreteColleagueB();
var concreteMediator = new ConcreteMediator();
concreteMediator.concreteColleagueA = concreteColleagueA;
concreteMediator.concreteColleagueB = concreteColleagueB;
concreteColleagueA.send('hello');
//# sourceMappingURL=mediator.js.map