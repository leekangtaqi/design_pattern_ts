/**
 * intention: Define a series of related algorithms, allow them can be replaced with each other
 */
class Strategy {
}
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    calculate() {
        this.strategy.calculate();
    }
    get strategy() {
        return this._strategy;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
}
class StrategyA extends Strategy {
    calculate() {
        console.log('a');
    }
}
class StrategyB extends Strategy {
    calculate() {
        console.log('b');
    }
}
var context = new Context(new StrategyA());
context.calculate();
context.strategy = new StrategyB();
context.calculate();
//# sourceMappingURL=strategy.js.map