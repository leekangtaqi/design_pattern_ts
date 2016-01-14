class Singleton{
    private static instance;
    constructor(){}
    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
var instanceA = Singleton.getInstance();
var instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);