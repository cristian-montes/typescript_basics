// This is function with specified types and the type of result does not need to be specified because TS does it by inferance. 
function addition(n1: number, n2: number){
    return n1+n2;
}

//This function has its  data type parameters defined and also the expected returned data type since the data type taken in is different to the one giving out.
// the void data type is when the function is not return any data or data type. 
function printResulties(num: number): void {
    console.log('Result: ' + num);
}

printResulties( addition(5, 12) );


//This the proper way to predefine a function with inputs and outputs and their data types. 
let combineValue: (a: number, b: number) =>  number;
 combineValue =  addition;

console.log(combineValue(8, 8));


//this is a function that takes two number a parameters and a call back
function addAndHandle(n1: number, n2: number, cb:(num: number) =>  void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result)=> {
    console.log(result);
})