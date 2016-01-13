/**
 * intention: Provides a proxy for other objects to control access to this object.
 */
interface Subject{
    request();
}
class RealSubject implements Subject{
    request(){
        console.log('real request...');
    }
}
class Proxy implements Subject{
    realSubject: RealSubject;
    constructor(){
        this.realSubject = new RealSubject();
    }
    request(){
        console.log('do some else...');
        this.realSubject.request();
        console.log('do some else...');
    }
}
var proxy = new Proxy();
proxy.request();