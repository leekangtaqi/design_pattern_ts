var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * intention: 创建一系列相关的产品
 */
var CarFactory = (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createTire = function () { };
    CarFactory.prototype.createEngine = function () { };
    return CarFactory;
})();
var CarFactoryA = (function (_super) {
    __extends(CarFactoryA, _super);
    function CarFactoryA() {
        _super.apply(this, arguments);
    }
    CarFactoryA.prototype.createTire = function () {
        return new TireA();
    };
    CarFactoryA.prototype.createEngine = function () {
        return new EngineA();
    };
    return CarFactoryA;
})(CarFactory);
var CarFactoryB = (function (_super) {
    __extends(CarFactoryB, _super);
    function CarFactoryB() {
        _super.apply(this, arguments);
    }
    CarFactoryB.prototype.createTire = function () {
        return new TireB();
    };
    CarFactoryB.prototype.createEngine = function () {
        return new EngineB();
    };
    return CarFactoryB;
})(CarFactory);
var Tire = (function () {
    function Tire() {
    }
    return Tire;
})();
var TireA = (function (_super) {
    __extends(TireA, _super);
    function TireA() {
        _super.apply(this, arguments);
    }
    TireA.prototype.loop = function () {
        console.log('tire a is looping');
    };
    return TireA;
})(Tire);
var TireB = (function (_super) {
    __extends(TireB, _super);
    function TireB() {
        _super.apply(this, arguments);
    }
    TireB.prototype.loop = function () {
        console.log('tire b is looping');
    };
    return TireB;
})(Tire);
var Engine = (function () {
    function Engine() {
    }
    return Engine;
})();
var EngineA = (function (_super) {
    __extends(EngineA, _super);
    function EngineA() {
        _super.apply(this, arguments);
    }
    EngineA.prototype.start = function () {
        console.log('engine a is starting');
    };
    return EngineA;
})(Engine);
var EngineB = (function (_super) {
    __extends(EngineB, _super);
    function EngineB() {
        _super.apply(this, arguments);
    }
    EngineB.prototype.start = function () {
        console.log('engine b is starting');
    };
    return EngineB;
})(Engine);
var carfactory = new CarFactoryA();
var tire = carfactory.createTire();
var engine = carfactory.createEngine();
tire.loop();
engine.start();
//# sourceMappingURL=abs_factory.js.map