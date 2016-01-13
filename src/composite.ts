abstract class Component{
    protected _name:string;
    abstract add(component: Component): Component;
    abstract remove(component: Component);
    display(depth: number){
        console.log((()=>{
                var result = '';
                for(var i=0; i<depth; i++){
                    result += '-'
                }
                return result;
            })() + this._name);
    };
}
class Composite extends Component{
    private _children: Component[];
    constructor(name: string){
        super();
        this._name = name;
        this._children = [];
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name
    }
    add(component: Component): Component{
        this._children.push(component);
        return this;
    }
    remove(component){
        this._children.forEach((c, index)=>{
            (c === component) && this._children.splice(index, 1);
        })
    }
    display(depth: number){
        super.display(depth);
        this._children.forEach((c, index)=>{
            c.display(depth+1);
        })
    }
}
class Leaf extends Component{
    constructor(name: string){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(name: string){
        this._name = name
    }
    add(component: Component): Component{
        console.log('nothing to do');
        return;
    }
    remove(component){
        console.log('nothing to do');
    }
    display(depth: number){
        super.display(depth);
    }
}
var root = new Composite('root');
var leafA = new Leaf('leafA');
var compositeA = new Composite('compositeA');
var compositeB = new Composite('compositeB');
var compositeAA = new Composite('compositeAA');
var compositeAB = new Composite('compositeAB');
var leafAA = new Leaf('leafAA');
var leafBA = new Leaf('leafBA');
var compositeBA = new Composite('compositeBA');
root.add(leafA).add(compositeA).add(compositeB);
compositeA.add(compositeAA).add(compositeAB).add(leafAA);
compositeB.add(leafBA);
root.display(1);
