/**
 * For create complicated instance
 */
class Product {
    constructor() {
        this.parts = [];
    }
    ;
    addPart(part) {
        this.parts.push(part);
    }
    show() {
        this.parts.forEach((part) => {
            console.log(part);
        });
    }
}
class ProductBuilder {
}
class ConcreteProductBuilder extends ProductBuilder {
    constructor() {
        super();
    }
    addPartA(part) {
        this.product.addPart(part);
    }
    addPartB(part) {
        this.product.addPart(part);
    }
    addPartC(part) {
        this.product.addPart(part);
    }
    build() {
        this.product = new Product();
        this.addPartA('part1');
        this.addPartB('part2');
        this.addPartC('part3');
        return this.product;
    }
}
const builder = new ConcreteProductBuilder();
const product = builder.build();
product.show();
//# sourceMappingURL=builder.js.map