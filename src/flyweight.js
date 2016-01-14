class FlyweightFactory {
    constructor() {
        this.flyweightHashMap = {};
    }
    getFlyweight(type) {
        if (!this.flyweightHashMap[type]) {
            this.flyweightHashMap[type] = new ConcreteFlyweight();
        }
        return this.flyweightHashMap[type];
    }
    getCount() {
        console.log('instance count is ' + Object.keys(this.flyweightHashMap).length);
    }
}
class Flyweight {
}
class ConcreteFlyweight extends Flyweight {
    operate(externalStatus) {
        console.log('get external status --' + externalStatus);
    }
}
class UnShareConcreteFlyweight extends Flyweight {
    operate(externalStatus) {
        console.log('get external status --' + externalStatus);
    }
}
var externalStatus = 10;
var flyweightFactory = new FlyweightFactory();
var flyweightAA = flyweightFactory.getFlyweight('a');
flyweightAA.operate(externalStatus--);
var flyweightAB = flyweightFactory.getFlyweight('a');
flyweightAB.operate(externalStatus--);
var flyweightBA = flyweightFactory.getFlyweight('b');
flyweightBA.operate(externalStatus--);
var flyweightBB = flyweightFactory.getFlyweight('b');
flyweightBB.operate(externalStatus--);
flyweightFactory.getCount();
//# sourceMappingURL=flyweight.js.map