/**
 * intention: 隐藏实例创建的细节
 */
class SimpleFactory {
    constructor() {
    }
    ;
    createProduct(type) {
        switch (type) {
            case 'a':
                return new ProductA();
            case 'b':
                return new ProductB();
        }
    }
}
class Product {
    constructor() {
    }
}
class ProductA extends Product {
    dosomething() {
        console.log('product a do some thing');
    }
}
class ProductB extends Product {
    dosomething() {
        console.log('product b do some thing');
    }
}
const factory = new SimpleFactory();
const productA = factory.createProduct('a');
const productB = factory.createProduct('b');
productA.dosomething();
productB.dosomething();
//# sourceMappingURL=simple_factory.js.map