

      //        TypeScript - Enums
  enum myEnum { sultan = 9, faizan, usman, arsalan, }; 

       console.log(myEnum.sultan);      // outpit
       console.log(myEnum.arsalan);
       console.log(myEnum);
       
       
//     TypeScript - Enums ex 2
enum Weekday {
  Monday = 9,
  Tuesday,
  Wednesday = 13,
  Thursday,
  Friday,
  Saturday =7
}
console.log(Weekday.Monday);    //   output
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
console.log(Weekday.Saturday);




  //    TypeScript - Objects


let person1:{ firstName: string, lastName: string} = { 
    firstName:"Sultan", 
    lastName:"Ahmed" 
     
}; 

    //access the object values 
console.log(person1.firstName)     //   output
console.log(person1.lastName)

    // Example 2

// Try playing around with modifying properties and adding ones to see what happens
let carNew: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(carNew);            //   output
  console.log(carNew.model);
  console.log(carNew.year);
   




       //Tuple

let myTuple: [number, string ,number, string]; // declaring the tuple
myTuple = [10, "Hello" , 733 , "Sultan"]; // initializing the tuple
console.log(myTuple[2]);                  // output
console.log(myTuple);
console.log(myTuple[3]);



        //object
let car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car);              //   output
  console.log(car.year);
  


  //    TypeScript - Objects


  let person:{ firstName: string, lastName: string, company: string, idNum: number} = { 
    firstName: "Sultan", 
    lastName: "Ahmed", 
    company: "FaizanMedico",
    idNum: 1177
}; 

    //access the object values 
console.log(person.firstName);
console.log(person.lastName);
console.log(person.company);




// Create a TypeScript object:
let myBio = {
  firstName:  "Sultan",
  lastName: "Ahmed",
  company: "FaizanMedico",
};
console.log(myBio.company);        //   output
console.log(myBio.firstName);
console.log(myBio);




   let message: string = "Hello World!";
   console.log(message[4]);           // output
   console.log(message[9]);




        // Array
        let fruits: string[] = ["Apple", "Banana", "Oring"];
        //  mixed Array num string
 let arrayMixed = [1,2,3, "Apple", "sultan", true];
 
 console.log(fruits);                      //  output
 console.log(arrayMixed[5]);
 console.log(arrayMixed[1]);
 console.log(arrayMixed);
 



     //     Array  any
     let arr: any[] = ["John", 212, true]; 
     arr.push(733); 
     console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
     console.log(arr[3]);
     


