var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component = (function () {
    function Component() {
    }
    Component.prototype.display = function (depth) {
        console.log((function () {
            var result = '';
            for (var i = 0; i < depth; i++) {
                result += '-';
            }
            return result;
        })() + this._name);
    };
    ;
    return Component;
})();
var Composite = (function (_super) {
    __extends(Composite, _super);
    function Composite(name) {
        _super.call(this);
        this._name = name;
        this._children = [];
    }
    Object.defineProperty(Composite.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Composite.prototype.add = function (component) {
        this._children.push(component);
        return this;
    };
    Composite.prototype.remove = function (component) {
        var _this = this;
        this._children.forEach(function (c, index) {
            (c === component) && _this._children.splice(index, 1);
        });
    };
    Composite.prototype.display = function (depth) {
        _super.prototype.display.call(this, depth);
        this._children.forEach(function (c, index) {
            c.display(depth + 1);
        });
    };
    return Composite;
})(Component);
var Leaf = (function (_super) {
    __extends(Leaf, _super);
    function Leaf(name) {
        _super.call(this);
        this._name = name;
    }
    Object.defineProperty(Leaf.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Leaf.prototype.add = function (component) {
        console.log('nothing to do');
        return;
    };
    Leaf.prototype.remove = function (component) {
        console.log('nothing to do');
    };
    Leaf.prototype.display = function (depth) {
        _super.prototype.display.call(this, depth);
    };
    return Leaf;
})(Component);
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
//# sourceMappingURL=composite.js.map