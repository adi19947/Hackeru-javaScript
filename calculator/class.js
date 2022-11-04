
const button = document.getElementById('submit');
const result = document.getElementById('result');



function FixCompute(x, y, operator) {
    this.x = x;
    this.y = y;
    this.operator = operator;
    this.compute = function () {
        switch (this.operator) {
            case '+':
                return this.x + this.y;
                break;
            case '-':
                return this.x - this.y;
                break;
            case '*':
                return this.x * this.y;
                break;
            case '/':
                return this.x / this.y;
                break;

            default:
                return this.x + this.y;
                break;
        }
    };

    this.printExpression = function () {
        return (this.x + this.operator + this.y + '=' + this.compute());
    };
}


function logResult(event) {
    let firstNum = document.getElementById('num1').value;
    let secondNum = document.getElementById('num2').value;
    let oper = document.getElementById('operator').value;
    const myCompute = new FixCompute(firstNum, secondNum, oper);
    result.innerHTML = myCompute.printExpression();
}




button.addEventListener('click', logResult);