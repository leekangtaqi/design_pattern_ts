class Singleton {
    constructor() {
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
var instanceA = Singleton.getInstance();
var instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
//# sourceMappingURL=singleton.js.map