var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject = (function () {
    function Subject() {
    }
    return Subject;
})();
var RealSubject = (function (_super) {
    __extends(RealSubject, _super);
    function RealSubject() {
        _super.call(this);
        this.observers = [];
    }
    RealSubject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    RealSubject.prototype.detach = function (observer) {
        var _this = this;
        this.observers.forEach(function (o, index) {
            o === observer && _this.observers.splice(index, 1);
        });
    };
    RealSubject.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (o) {
            o.update(_this.action);
        });
    };
    return RealSubject;
})(Subject);
var Observer = (function () {
    function Observer() {
    }
    return Observer;
})();
var RealObserver = (function (_super) {
    __extends(RealObserver, _super);
    function RealObserver() {
        _super.apply(this, arguments);
    }
    RealObserver.prototype.update = function (action) {
        console.log('subject current status is ' + action);
    };
    return RealObserver;
})(Observer);
var subject = new RealSubject();
var observerA = new RealObserver();
var observerB = new RealObserver();
subject.attach(observerA);
subject.attach(observerB);
subject.action = 'starting';
subject.notify();
subject.action = 'stopping';
subject.detach(observerA);
subject.notify();
//# sourceMappingURL=observer.js.map