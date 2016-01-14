class PrototypeA {
    constructor() {
        this._name = 'test';
    }
    ;
    clone() {
        var proto = new PrototypeA();
        for (var prop in this) {
            proto[prop] = this[prop];
        }
        return new PrototypeA();
    }
}
var protoA = new PrototypeA();
var protoB = protoA.clone();
console.log(protoA);
console.log(protoB);
console.log(protoA === protoB);
//# sourceMappingURL=prototype.js.map