/**
 * For create complicated instance
 */
class Product{
    parts: any[] = [];
    constructor(){};
    addPart(part:any){
        this.parts.push(part);
    }
    show(){
        this.parts.forEach((part)=>{
            console.log(part);
        })
    }
}
abstract class ProductBuilder{
    abstract addPartA(part:any);
    abstract addPartB(part:any);
    abstract addPartC(part:any);
    abstract build();
}
class ConcreteProductBuilder extends ProductBuilder{
    product:Product;
    constructor(){
        super();
    }
    addPartA(part:any){
        this.product.addPart(part)
    }
    addPartB(part:any){
        this.product.addPart(part)
    }
    addPartC(part:any){
        this.product.addPart(part)
    }
    build(){
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
