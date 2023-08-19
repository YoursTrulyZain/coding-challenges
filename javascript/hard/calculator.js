/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator{
    constructor(){
        this.result = 0
    }

    add(number){
        this.result += number;
    }

    subtract(number){
        this.result -= number;
    }

    multiply(number){
        this.result *= number;
    }

    divide(number){
        this.result /= number;
    }

    clear(){
        this.result = 0;
    }

    getResult(){
        return this.result;
    }

    calculate(expression){
        const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove all spaces
        if (!/^[0-9+\-*/().]*$/.test(sanitizedExpression)) {
            throw new Error("Invalid expression.");
        }

        try {
            this.result = eval(sanitizedExpression);
        } catch (error) {
            throw new Error("Error while evaluating the expression.");
        }
    }
}

const calculator = new Calculator();
calculator.add(10);
calculator.multiply(2);
calculator.subtract(3);
console.log(calculator.getResult()); // Output: 17

calculator.clear();
calculator.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');
console.log(calculator.getResult()); // Output: 23
