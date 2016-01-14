abstract class Mediator{
    abstract send(txt, colleague: Colleague);
}
class ConcreteMediator extends Mediator{
    _concreteColleagueA: Colleague;
    _concreteColleagueB: Colleague;
    constructor(){
        super();
    }
    set concreteColleagueA(concreteColleagueA: Colleague){
        this._concreteColleagueA = concreteColleagueA;
    }
    set concreteColleagueB(concreteColleagueB: Colleague){
        this._concreteColleagueB = concreteColleagueB;
    }
    send(txt, colleague: Colleague){
        if(colleague === this._concreteColleagueA){
            this._concreteColleagueB.receive(txt);
        }
        else{
            console.log(colleague);
            this._concreteColleagueA.receive(txt);
        }
    }
}
abstract class Colleague{
    protected mediator: Mediator;
    constructor(){
        this.mediator = new ConcreteMediator();
    }
    abstract send(txt);
    abstract receive(txt);
}
class ConcreteColleagueA extends Colleague{
    constructor(){
        super();
    }
    send(txt){
        this.mediator.send(txt, this);
    }
    receive(txt){
        console.log('colleague A received ' + txt);
    }
}
class ConcreteColleagueB extends Colleague{
    constructor(){
        super();
    }
    send(txt){
        this.mediator.send(txt, this);
    }
    receive(txt){
        console.log('colleague B received ' + txt);
    }
}
var concreteColleagueA = new ConcreteColleagueA();
var concreteColleagueB = new ConcreteColleagueB();
var concreteMediator = new ConcreteMediator();
concreteMediator.concreteColleagueA = concreteColleagueA;
concreteMediator.concreteColleagueB = concreteColleagueB;
concreteColleagueA.send('hello');