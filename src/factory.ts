/**
 * intention: Defines an interface for creating an object
 * so that subclasses decide which class to instantiation
 * delay instantiation to subclasses.
 */
interface IFactory{
    createProduct();
}
class FactoryA implements IFactory{
    public createProduct():Product{
        return new ProductA();
    }
}
class FactoryB implements IFactory{
    public createProduct():Product{
        return new ProductB();
    }
}
abstract class Product{

}
class ProductA extends Product{

}
class ProductB extends Product{

}
var factory = new FactoryA();
var product = factory.createProduct();
console.log(product instanceof ProductA);