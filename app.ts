//the "UNKNOWN" data type is not the same as any; the UNKNOWN data type is more restrictive;
// You use the unknown property is the data type the user is going to input is "UNKNOWN"
// Also if the data type then assigned can be used by doing some conditional checks to make sure that is the type of data desire. 
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
    userName = userInput;
}

// the never data type is newer and sometimes is not use in this instances but oftentimes not used because it is obvious the any data type will never be returned.
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code}
}