class FactoryA {
    createProduct() {
        return new ProductA();
    }
}
class FactoryB {
    createProduct() {
        return new ProductB();
    }
}
class Product {
}
class ProductA extends Product {
}
class ProductB extends Product {
}
var factory = new FactoryA();
var product = factory.createProduct();
console.log(product instanceof ProductA);
//# sourceMappingURL=factory.js.map