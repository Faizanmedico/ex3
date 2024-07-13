var myEnum;
(function (myEnum) {
    myEnum[myEnum["sultan"] = 9] = "sultan";
    myEnum[myEnum["faizan"] = 10] = "faizan";
    myEnum[myEnum["usman"] = 11] = "usman";
    myEnum[myEnum["arsalan"] = 12] = "arsalan";
})(myEnum || (myEnum = {}));
;
console.log(myEnum.sultan);
console.log(myEnum.arsalan);
console.log(myEnum);
//    TypeScript - Objects
var person1 = {
    firstName: "Sultan",
    lastName: "Ahmed"
};
//access the object values 
console.log(person1.firstName);
console.log(person1.lastName);
// Example 2
// Try playing around with modifying properties and adding ones to see what happens
var carNew = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(carNew);
console.log(carNew.model);
console.log(carNew.year);
// Array
var fruits = ["Apple", "Banana", "Oring"];
//  mixed Array num string
var arrayMixed = [1, 2, 3, "Apple", "sultan", true];
console.log(fruits);
console.log(arrayMixed[5]);
console.log(arrayMixed[1]);
console.log(arrayMixed);
//Tuple
var myTuple; // declaring the tuple
myTuple = [10, "Hello", 733, "Sultan"]; // initializing the tuple
console.log(myTuple[2]);
console.log(myTuple);
console.log(myTuple[3]);
//object
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
console.log(car.year);
//    TypeScript - Objects
var person = {
    firstName: "Sultan",
    lastName: "Ahmed",
    company: "FaizanMedico",
    idNum: 1177
};
//access the object values 
console.log(person.firstName);
console.log(person.lastName);
console.log(person.company);
var message = "Hello World!";
console.log(message[4]);
console.log(message[9]);
//     Array  any
var arr = ["John", 212, true];
arr.push(733);
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
console.log(arr[3]);
// Create a TypeScript object:
var myBio = {
    firstName: "Sultan",
    lastName: "Ahmed",
    company: "FaizanMedico",
};
console.log(myBio.company);
console.log(myBio.firstName);
console.log(myBio);
