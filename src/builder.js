var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * For create complicated instance
 */
var Product = (function () {
    function Product() {
        this.parts = [];
    }
    ;
    Product.prototype.addPart = function (part) {
        this.parts.push(part);
    };
    Product.prototype.show = function () {
        this.parts.forEach(function (part) {
            console.log(part);
        });
    };
    return Product;
})();
var ProductBuilder = (function () {
    function ProductBuilder() {
    }
    return ProductBuilder;
})();
var ConcreteProductBuilder = (function (_super) {
    __extends(ConcreteProductBuilder, _super);
    function ConcreteProductBuilder() {
        _super.call(this);
    }
    ConcreteProductBuilder.prototype.addPartA = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.addPartB = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.addPartC = function (part) {
        this.product.addPart(part);
    };
    ConcreteProductBuilder.prototype.build = function () {
        this.product = new Product();
        this.addPartA('part1');
        this.addPartB('part2');
        this.addPartC('part3');
        return this.product;
    };
    return ConcreteProductBuilder;
})(ProductBuilder);
var builder = new ConcreteProductBuilder();
var product = builder.build();
product.show();
//# sourceMappingURL=builder.js.map