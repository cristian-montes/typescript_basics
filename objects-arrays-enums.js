"use strict";
// this is best practice when declaring types in a object. You don't want to go and specifically call every single data type in an objec because of redudantcy. it is still valid tho. 
const producty = {
    id: '123n',
    price: 12.99,
    tags: ['great offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
/// TUPLES --> the reason why the types of data the keys are taking are being called out are because tuples look like arrays. 
const persona = {
    name: 'Omar',
    age: 28,
    hobbies: ['eating', 'biking', 'working-out'],
    role: [2, 'author']
};
//ENUM --> assigngs labels to numers.
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["WRITTER"] = 1] = "WRITTER";
    Role[Role["EDITOR"] = 2] = "EDITOR";
})(Role || (Role = {}));
const persona2 = {
    name: 'Omar',
    age: 28,
    hobbies: ['eating', 'biking', 'working-out'],
    role: Role.AUTHOR
};
