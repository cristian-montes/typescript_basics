// This is function with specified types and the type of result does not need to be specified because TS does it by inferance. 
function addition(n1, n2) {
    return n1 + n2;
}
//This function has its  data type parameters defined and also the expected returned data type since the data type taken in is different to the one giving out.
// the void data type is when the function is not return any data or data type. 
function printResulties(num) {
    console.log('Result: ' + num);
}
printResulties(addition(5, 12));
var combineValue;
combineValue = addition;
console.log(combineValue(8, 8));
