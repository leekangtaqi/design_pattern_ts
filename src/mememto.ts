class Originator{
    private _status: string = 'stopped';
    createMememto(){
        return new Mememto(this._status);
    }
    setMememto(mememto: Mememto){
        this._status = mememto.status;
    }
    get status(){
        return this._status;
    }
    set status(status: string){
        this._status = status;
    }
}
class Mememto{
    private _status: string;
    constructor(stauts: string){
        this._status = stauts;
    }
    get status(){
        return this._status;
    }
}
class CareTaker{
    private _mememto: Mememto;
    get mememto(){
        return this._mememto;
    }
    set mememto(mememto: Mememto){
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