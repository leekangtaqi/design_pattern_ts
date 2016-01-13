var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * intention: Define a series of related algorithms, allow them can be replaced with each other
 */
var Strategy = (function () {
    function Strategy() {
    }
    return Strategy;
})();
var Context = (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.calculate = function () {
        this.strategy.calculate();
    };
    Object.defineProperty(Context.prototype, "strategy", {
        get: function () {
            return this._strategy;
        },
        set: function (strategy) {
            this._strategy = strategy;
        },
        enumerable: true,
        configurable: true
    });
    return Context;
})();
var StrategyA = (function (_super) {
    __extends(StrategyA, _super);
    function StrategyA() {
        _super.apply(this, arguments);
    }
    StrategyA.prototype.calculate = function () {
        console.log('a');
    };
    return StrategyA;
})(Strategy);
var StrategyB = (function (_super) {
    __extends(StrategyB, _super);
    function StrategyB() {
        _super.apply(this, arguments);
    }
    StrategyB.prototype.calculate = function () {
        console.log('b');
    };
    return StrategyB;
})(Strategy);
var context = new Context(new StrategyA());
context.calculate();
context.strategy = new StrategyB();
context.calculate();
//# sourceMappingURL=strategy.js.map