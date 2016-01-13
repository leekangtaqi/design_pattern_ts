var RealSubject = (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('real request...');
    };
    return RealSubject;
})();
var Proxy = (function () {
    function Proxy() {
        this.realSubject = new RealSubject();
    }
    Proxy.prototype.request = function () {
        console.log('do some else...');
        this.realSubject.request();
        console.log('do some else...');
    };
    return Proxy;
})();
var proxy = new Proxy();
proxy.request();
//# sourceMappingURL=proxy.js.map