class Originator {
    constructor() {
        this._status = 'stopped';
    }
    createMememto() {
        return new Mememto(this._status);
    }
    setMememto(mememto) {
        this._status = mememto.status;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
class Mememto {
    constructor(stauts) {
        this._status = stauts;
    }
    get status() {
        return this._status;
    }
}
class CareTaker {
    get mememto() {
        return this._mememto;
    }
    set mememto(mememto) {
        this._mememto = mememto;
    }
}
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