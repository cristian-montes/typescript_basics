"use strict";
//UNION TYPES --> is when the data type can be either or of the two specfied, this will required some extra logic to apply correctly under specific conditions. 
function combine(input1, input2, resultConvertion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
;
const combinedAges = combine(34, 16, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-text');
const combinedNames = combine('Max', 'Ana', 'as-text');
console.log(combinedNames);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
