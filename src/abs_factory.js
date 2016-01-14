/**
 * intention: 创建一系列相关的产品
 */
class CarFactory {
    constructor() {
    }
    createTire() { }
    createEngine() { }
}
class CarFactoryA extends CarFactory {
    createTire() {
        return new TireA();
    }
    createEngine() {
        return new EngineA();
    }
}
class CarFactoryB extends CarFactory {
    createTire() {
        return new TireB();
    }
    createEngine() {
        return new EngineB();
    }
}
class Tire {
    constructor() {
    }
}
class TireA extends Tire {
    loop() {
        console.log('tire a is looping');
    }
}
class TireB extends Tire {
    loop() {
        console.log('tire b is looping');
    }
}
class Engine {
}
class EngineA extends Engine {
    start() {
        console.log('engine a is starting');
    }
}
class EngineB extends Engine {
    start() {
        console.log('engine b is starting');
    }
}
var carfactory = new CarFactoryA();
var tire = carfactory.createTire();
var engine = carfactory.createEngine();
tire.loop();
engine.start();
//# sourceMappingURL=abs_factory.js.map