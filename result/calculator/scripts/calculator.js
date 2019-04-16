/**
 * core
 */
class Calculator {
    constructor(initialText) {
        this.input = "";
        this.output = "initialText";
        this.operand1 = "";
        this.operand2 = "";
        this.operator = "";
    }

    setInput(input){
        this.input = input;
    }

    getInput(){
        return this.input;
    }

    setOutput(output){
        this.output = output;
    }

    getOutput(){
        return this.output;
    }

    calculate(){
        switch (this.operator) {
            case '+':
                
                break;
            case '-':
                
                break;
            case '*':
                
                break;
            case '/':
                
                break;
            default:
                break;
        }
    }

    checkInput(input){

    }

    add(left, right){
        return left + right;
    }

    remove(left, right){
        return left - right;
    }

    divide(left, right){
        return left / right;
    } 
    
    multiply(left, right){
        return left * right;
    }

}


/**
 * UI
 */
window.addEventListener('DOMContentLoaded', function() {
    const calculator = new Calculator("Hallo Welt");
    calculator.displayInput();
    calculator.displayOutput();
});


/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
console.log(""/*TODO*/, "should be", 17);
console.log(""/*TODO*/, "should be", 15);
console.log(""/*TODO*/, "should be", 30);
console.log(""/*TODO*/, "should be", true); // true = hasError