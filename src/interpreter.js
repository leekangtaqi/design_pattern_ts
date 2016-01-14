class MyContext {
}
class AbstractExpression {
}
class TerminalExpression extends AbstractExpression {
    interpreter(context) {
        console.log('output is ' + (context.input + 1));
    }
}
class NonTerminalExpression extends AbstractExpression {
    interpreter(context) {
        console.log('this is a nonTerminal expression recur regulars');
    }
}
var context = new MyContext();
context.input = 0;
// 1 plus expression
var onePlusTerminalExpression = new TerminalExpression();
onePlusTerminalExpression.interpreter(context);
//# sourceMappingURL=interpreter.js.map