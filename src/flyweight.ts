class FlyweightFactory{
    flyweightHashMap = {};
    getFlyweight(type: string){
        if(!this.flyweightHashMap[type]){
            this.flyweightHashMap[type]  = new ConcreteFlyweight();
        }
        return this.flyweightHashMap[type];
    }
    getCount(){
        console.log('instance count is ' + Object.keys(this.flyweightHashMap).length);
    }
}
abstract class Flyweight{
    abstract operate(externalStatus: any);
}
class ConcreteFlyweight extends Flyweight{
    operate(externalStatus: any){
        console.log('get external status --' + externalStatus);
    }
}
class UnShareConcreteFlyweight extends Flyweight{
    operate(externalStatus: any){
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

