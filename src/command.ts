class Invoker {
    private cmds:Command[] = [];

    accept(cmd:Command) {
        this.cmds.push(cmd)
    }

    execute() {
        this.cmds.forEach((cmd)=> {
            cmd.execute();
        })
    }
}
abstract class Command{
    protected receiver: Receiver;
    constructor(receiver: Receiver){
        this.receiver = receiver;
    }
    abstract execute();
}
class ConcreteCommand extends Command{
    constructor(receiver: Receiver){
        super(receiver);
    }
    execute(){
        this.receiver.action();
    }
}
class Receiver{
    action(){
        console.log('receiver do some actions...');
    }
}
var invoker = new Invoker();
var receiver = new Receiver();
var cmd = new ConcreteCommand(receiver);
invoker.accept(cmd);
invoker.execute();