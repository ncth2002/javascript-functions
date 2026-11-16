const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};


const addResult = calculator.add(10,20);
console.log(calculator);


const divideResult = calculator.divide(3000,10)
console.log(divideResult);


