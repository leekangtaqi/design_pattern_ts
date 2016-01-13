var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * intention: 隐藏实例创建的细节
 */
var SimpleFactory = (function () {
    function SimpleFactory() {
    }
    ;
    SimpleFactory.prototype.createProduct = function (type) {
        switch (type) {
            case 'a':
                return new ProductA();
            case 'b':
                return new ProductB();
        }
    };
    return SimpleFactory;
})();
var Product = (function () {
    function Product() {
    }
    return Product;
})();
var ProductA = (function (_super) {
    __extends(ProductA, _super);
    function ProductA() {
        _super.apply(this, arguments);
    }
    ProductA.prototype.dosomething = function () {
        console.log('product a do some thing');
    };
    return ProductA;
})(Product);
var ProductB = (function (_super) {
    __extends(ProductB, _super);
    function ProductB() {
        _super.apply(this, arguments);
    }
    ProductB.prototype.dosomething = function () {
        console.log('product b do some thing');
    };
    return ProductB;
})(Product);
var factory = new SimpleFactory();
var productA = factory.createProduct('a');
var productB = factory.createProduct('b');
productA.dosomething();
productB.dosomething();
//# sourceMappingURL=simple_factory.js.map