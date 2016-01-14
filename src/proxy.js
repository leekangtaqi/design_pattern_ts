class RealSubject {
    request() {
        console.log('real request...');
    }
}
class Proxy {
    constructor() {
        this.realSubject = new RealSubject();
    }
    request() {
        console.log('do some else...');
        this.realSubject.request();
        console.log('do some else...');
    }
}
var proxy = new Proxy();
proxy.request();
//# sourceMappingURL=proxy.js.map