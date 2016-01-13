var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FactoryA = (function () {
    function FactoryA() {
    }
    FactoryA.prototype.createProduct = function () {
        return new ProductA();
    };
    return FactoryA;
})();
var FactoryB = (function () {
    function FactoryB() {
    }
    FactoryB.prototype.createProduct = function () {
        return new ProductB();
    };
    return FactoryB;
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
    return ProductA;
})(Product);
var ProductB = (function (_super) {
    __extends(ProductB, _super);
    function ProductB() {
        _super.apply(this, arguments);
    }
    return ProductB;
})(Product);
var factory = new FactoryA();
var product = factory.createProduct();
console.log(product instanceof ProductA);
//# sourceMappingURL=factory.js.map