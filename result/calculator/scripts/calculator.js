/**
 * core
 */
class Calculator {
    constructor(initialText) {
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

    commandTyped(key){
        switch(key){
            case "key-c":
                this.reset();
                break;
            case "key-=":
                this.calculate();
                break;                
            default:
            break;
        }
    }


    calculate(){
        if(this.operand1 == "" || this.operand2 == "" || this.operator == ""){
            this.error();
            return;
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
                    return;
                }
                this.operand1 = this.operand2 / this.operand1;
                break;
            default:
                break;
        }
        this.operand2 = "";
        this.operator = "";
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
                calculator.commandTyped(event.target.id);
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
console.log(""/*TODO*/, "should be", 17);
console.log(""/*TODO*/, "should be", 15);
console.log(""/*TODO*/, "should be", 30);
console.log(""/*TODO*/, "should be", true); // true = hasError