/**
 * intention: Clone object, hide create detail and saving performance
 */
interface Prototype{
    clone();
}
class PrototypeA implements Prototype{
    private _name:string = 'test';
    constructor(){};
    clone(){
        var proto:PrototypeA =  new PrototypeA();
        for(var prop in this){
            proto[prop] = this[prop]
        }
        return new PrototypeA();
    }
}
var protoA = new PrototypeA();
var protoB = protoA.clone();
console.log(protoA);
console.log(protoB);
console.log(protoA === protoB);