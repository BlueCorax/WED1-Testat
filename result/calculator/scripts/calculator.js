'use strict';
/**
 * core
 */
class Calculator {
    constructor() {
        this.reset();
    }

    reset(){
        this.operand1 = "";
        this.operand2 = "";
        this.operator = "";
    }

    error(){
        this.operator = "";
        this.operand2 = "Invalid calculation";
    }

    numberTyped(number){
        if(isNaN(this.operand1) || this.operand1 == ""){
            this.operand1 = number;
        }else{
            this.operand1 = parseInt(this.operand1)*10 + number;
        }
    }

    operatorTyped(op){
        if(this.operator == ""){
            this.operand2 = this.operand1;
            this.operand1 = "";
        }
        this.operator = op;
    }

    calculate(){
        if(this.operand1 == "" || this.operand2 == "" || this.operator == ""){
            this.error();
            return false;
        }
        switch (this.operator) {
            case '+':
                this.operand1 = this.operand2 + this.operand1;
                break;
            case '-':
                this.operand1 = this.operand2 - this.operand1;
                break;
            case '*':
                this.operand1 = this.operand2 * this.operand1;
                break;
            case '/':
                if(this.operand1 == 0){
                    this.error();
                    return false;
                }
                this.operand1 = this.operand2 / this.operand1;
                break;
            default:
                break;
        }
        this.operand2 = "";
        this.operator = "";
        return true;
    }
}
/**
 * UI
 */
window.addEventListener('DOMContentLoaded', function() {
    const calculator = new Calculator();
    document.querySelector("#output").innerHTML = "Welcome";
    document.querySelector("form").addEventListener("click", () => {
        switch(event.target.className){
            case "number":
                calculator.numberTyped(parseInt(event.target.value));
                break;
            case "operator":
                calculator.operatorTyped(event.target.value);
                break;
            case "command":
                switch(event.target.id){
                    case "key-c":
                        calculator.reset();
                        break;
                    case "key-=":
                        calculator.calculate();
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        document.querySelector("#output").innerHTML = calculator.operand2 + " " + calculator.operator;
        document.querySelector("#input").innerHTML = calculator.operand1;
    });
});


/**
 * Tests Scenarios
 */
const testCalc = new Calculator();
var console = console; //only needed for validator
testCalc.numberTyped(1);
testCalc.numberTyped(1);
testCalc.operatorTyped("+");
testCalc.numberTyped(6);
testCalc.calculate();
console.log(testCalc.operand1, "should be", 17);

testCalc.operatorTyped("-");
testCalc.numberTyped(2);
testCalc.calculate();
console.log(testCalc.operand1, "should be", 15);

testCalc.operatorTyped("*");
testCalc.numberTyped(2);
testCalc.calculate();
console.log(testCalc.operand1, "should be", 30);

testCalc.reset();
testCalc.operatorTyped("*");
testCalc.operatorTyped("-");
testCalc.operatorTyped("+");
testCalc.operatorTyped("/");
testCalc.numberTyped(4);
console.log(!testCalc.calculate(), "should be", true); // true = hasError