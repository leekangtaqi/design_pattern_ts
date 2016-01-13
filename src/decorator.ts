/**
 * intention: Adding additional abilities to an object dynamically
 */
abstract class Component{
    operate(){}
}
class ConcreteComponent extends Component{
    operate(){
        console.log('origin operation');
    }
}
abstract class Decorator extends Component{
    component: Component;
    constructor(component: Component){
        super();
        this.component = component;
    }
    decorate(component: Component){
        this.component = component;
    }
    operate(){
        this.component.operate();
    }
}
class addBehaviorDecorator extends Decorator{
    addBehavior(){
        console.log('behavior added');
    }
    operate(){
        this.addBehavior();
        super.operate();
    }
}
var component = new ConcreteComponent();
var decorator = new addBehaviorDecorator(component);
decorator.operate();