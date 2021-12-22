//UNION TYPES --> is when the data type can be either or of the two specfied, this will required some extra logic to apply correctly under specific conditions. 

// function combine(
//     input1: number|string, 
//     input2: number|string
// ){
//     let result;

//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// };

// const combinedAges = combine(34, 66);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Ana');
// console.log(combinedNames)

// LITERAL TYPES -> Is when you are very clear or sure about the value it should hold. The indetifier naming is up to you, but it is good practice to name it something similar to the data type.
// Also it is worth mentionning that literal types are often used in conjuction of union types. 

// function combine(
//     input1: number|string, 
//     input2: number|string,
//     resultConvertion: 'as-number' | 'as-text'
// ){
//     let result;

//     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number'){
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// };

// const combinedAges = combine(34, 16, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-text')

// const combinedNames = combine('Max', 'Ana', 'as-text');
// console.log(combinedNames)


// TYPE ALISES are a neat way to save time and make code more maintable. ALWAYS use "type" then the alis of your type like the example below
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'


function combine(
    input1: Combinable,
    input2: Combinable,
    resultConvertion: ConversionDescriptor
){
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
};

const combinedAges = combine(34, 16, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-text')

const combinedNames = combine('Max', 'Ana', 'as-text');
console.log(combinedNames)


//--------------------*******----------------------------------- ********************************************* ---------------------*****-------------------------//
// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// TO:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}