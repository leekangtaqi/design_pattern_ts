/**
 * intention: Adding additional abilities to an object dynamically
 */
class Component {
    operate() { }
}
class ConcreteComponent extends Component {
    operate() {
        console.log('origin operation');
    }
}
class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
    }
    decorate(component) {
        this.component = component;
    }
    operate() {
        this.component.operate();
    }
}
class addBehaviorDecorator extends Decorator {
    addBehavior() {
        console.log('behavior added');
    }
    operate() {
        this.addBehavior();
        super.operate();
    }
}
var component = new ConcreteComponent();
var decorator = new addBehaviorDecorator(component);
decorator.operate();
//# sourceMappingURL=decorator.js.map