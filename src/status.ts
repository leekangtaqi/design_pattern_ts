/**
 * When an object's internal state changes, it is allowed to change its behavior.
 * This object looks like change its class
 */
class Context{
    _state: State;
    constructor(state: State){
        this.state = state;
    }
    get state(){
        return this._state;
    }
    set state(state: State){
        this._state = state;
    }
    request(){
        this._state.handle(this);
    }
}
abstract class State{
    abstract handle(context: Context);
}
class StateA extends State{
    handle(context: Context){
        console.log('state a...');
        context.state = new StateB();
    }
}
class StateB extends State{
    handle(context: Context){
        console.log('state b...');
        context.state = new StateA();
    }
}
var context = new Context(new StateA());
context.request();
context.request();
context.request();