class Handler {
    setSuccessor(successor) {
        this.successor = successor;
    }
}
class HandlerA extends Handler {
    constructor() {
        super();
    }
    handle(num) {
        if (num) {
            if (num < 10) {
                console.log('request is handled by a!');
            }
        }
        else {
            this.successor.handle(num);
        }
    }
}
class HandlerB extends Handler {
    constructor() {
        super();
    }
    handle(num) {
        if (num) {
            if (num < 50) {
                console.log('request is handled by b!');
            }
        }
        else {
            this.successor.handle(num);
        }
    }
}
class HandlerC extends Handler {
    constructor() {
        super();
    }
    handle(num) {
        console.log('request is handled by c!');
    }
}
var handlerA = new HandlerA();
var handlerB = new HandlerB();
var handlerC = new HandlerC();
handlerA.setSuccessor(handlerB);
handlerB.setSuccessor(handlerC);
handlerA.handle(5);
handlerA.handle(30);
handlerA.handle(100);
//# sourceMappingURL=chain_of_responsibility.js.map