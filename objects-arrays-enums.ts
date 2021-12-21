// this is best practice when declaring types in a object. You don't want to go and specifically call every single data type in an objec because of redudantcy. it is still valid tho. 
const producty= {
    id: '123n',
    price: 12.99,
    tags:['great offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

/// TUPLES --> the reason why the types of data the keys are taking are being called out are because tuples look like arrays. 
const persona: {
    name:string;
    age: number;
    hobbies: string[];
    role: [number, string] // this is the tuple and it is an array w/ fixed length of two or more; Please note that the some array methos will work with tuples and TS wont catch the addition or subtraction out the tuple.
} = {
    name: 'Omar',
    age: 28,
    hobbies: ['eating', 'biking', 'working-out'],
    role: [2, 'author']
}


//ENUM --> assigngs labels to numers.

enum Role {AUTHOR, WRITTER, EDITOR}

const persona2 = {
    name: 'Omar',
    age: 28,
    hobbies: ['eating', 'biking', 'working-out'],
    role: Role.AUTHOR
}