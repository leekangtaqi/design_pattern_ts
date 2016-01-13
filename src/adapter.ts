/**
 * Adapt to an interface, so that it can be compatible with the external
 */
class Target{
    public request(){
        console.log('plain request...');
    }
}
class Adapter extends Target{
    adaptee: Adaptee = new Adaptee();
    request(){
        this.adaptee.specificRequest();
    }
}
class Adaptee{
    public specificRequest(){
        console.log('special request...');
    }
}
var target = new Adapter();
target.request();
