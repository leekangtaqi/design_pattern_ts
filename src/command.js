class Invoker {
    constructor() {
        this.cmds = [];
    }
    accept(cmd) {
        this.cmds.push(cmd);
    }
    execute() {
        this.cmds.forEach((cmd) => {
            cmd.execute();
        });
    }
}
class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
}
class ConcreteCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }
    execute() {
        this.receiver.action();
    }
}
class Receiver {
    action() {
        console.log('receiver do some actions...');
    }
}
var invoker = new Invoker();
var receiver = new Receiver();
var cmd = new ConcreteCommand(receiver);
invoker.accept(cmd);
invoker.execute();
//# sourceMappingURL=command.js.map