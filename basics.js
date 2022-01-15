"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 45; // Type inferance -> the reason why we dont need a specify the data type of these const since their value would not change. In other words it will be because you initiallize with a number in this example
// Only declare the data type if the const it is not given an initial value, then you can do this let square: number; so we know it has to take a number type as value;
const number2 = 2.34;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
