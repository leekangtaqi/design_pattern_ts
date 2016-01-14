class Subject {
}
class RealSubject extends Subject {
    constructor() {
        super();
        this.observers = [];
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers.forEach((o, index) => {
            o === observer && this.observers.splice(index, 1);
        });
    }
    notify() {
        this.observers.forEach((o) => {
            o.update(this.action);
        });
    }
}
class Observer {
}
class RealObserver extends Observer {
    update(action) {
        console.log('subject current status is ' + action);
    }
}
const subject = new RealSubject();
const observerA = new RealObserver();
const observerB = new RealObserver();
subject.attach(observerA);
subject.attach(observerB);
subject.action = 'starting';
subject.notify();
subject.action = 'stopping';
subject.detach(observerA);
subject.notify();
//# sourceMappingURL=observer.js.map