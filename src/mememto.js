var Originator = (function () {
    function Originator() {
        this._status = 'stopped';
    }
    Originator.prototype.createMememto = function () {
        return new Mememto(this._status);
    };
    Originator.prototype.setMememto = function (mememto) {
        this._status = mememto.status;
    };
    Object.defineProperty(Originator.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    return Originator;
})();
var Mememto = (function () {
    function Mememto(stauts) {
        this._status = stauts;
    }
    Object.defineProperty(Mememto.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    return Mememto;
})();
var CareTaker = (function () {
    function CareTaker() {
    }
    Object.defineProperty(CareTaker.prototype, "mememto", {
        get: function () {
            return this._mememto;
        },
        set: function (mememto) {
            this._mememto = mememto;
        },
        enumerable: true,
        configurable: true
    });
    return CareTaker;
})();
var originator = new Originator();
var careTaker = new CareTaker();
console.log(originator.status);
var mememto = originator.createMememto();
careTaker.mememto = mememto;
originator.status = 'starting';
console.log(originator.status);
originator.setMememto(careTaker.mememto);
console.log(originator.status);
//# sourceMappingURL=mememto.js.map