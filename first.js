// Q1.) Write the code, one line for each action:
//  1 Create an empty object user.
// 2 Add the property name with the value John.
// 3 Add the property surname with the value Smith.
// 4 Change the value of the name to Pete.
// 5 Remove the property name from the object.

// const emptyobj={};
// const  obj=emptyobj;
// obj.name="John";
// obj.surname="Smith";
// obj.name="Pete";
// delete obj.name;
// console.log((obj));



// Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// let schedule = {};
// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false


// Q3.) We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
  
//   for (let person in salaries) {
//     sum += salaries[person];
//   }
  
//   console.log("Sum of all salaries:", sum);
  

// Q4.) Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
// let calculator = {
//     read() {
//       this.a = parseFloat(prompt("Enter the first value:"));
//       this.b = parseFloat(prompt("Enter the second value:"));
//     },
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   alert("the addition is "+ calculator.sum());
//   alert("the addition is " +calculator.mul());
  
  