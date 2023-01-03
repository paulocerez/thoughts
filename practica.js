// const leandro = {
//   firstName: "Leandro",
//   age: 18,
//   job: "Student",
//   intro: function () {
//     return `Hi, my name is ${this.firstName} and I'm ${this.age} years old, currently working as a ${this.job}.`;
//   },
// };

// // console.log(leandro);

// // console.log(friendNames[friendNames.length - 1]);

// function DogObject(name, age) {
//   let dog = Object.create(constructorObject);
//   dog.name = name;
//   dog.age = age;
//   return dog;
// }
// let constructorObject = {
//   speak: function () {
//     return "I am a dog";
//   },
// };
// let bingo = DogObject("Bingo", 54);
// console.log(bingo);

// const cat = {
//   size: "Small",
//   sound: "Miau",
//   color: "Grey",
// };

// const dog = {
//   size: "Medium",
//   sound: "Wuff",
//   color: "Brown",
// };

// const shark = {
//   size: "Big",
//   sound: "Rrrrr",
//   color: "Grey",
//   soundLoop: function () {
//     for (let i = 0; i < 5; i++) {
//       console.log(this.sound);
//     }
//   },
// };

// // const swTry = function () {
// //   switch (size) {
// //     case "Big":
// //       return "SHARK";
// //       break;
// //     case "Medium":
// //       return "DOG";
// //       break;
// //     case "Small":
// //       return "Cat";
// //       break;
// //   }
// // };

// // console.log(swTry());

// // console.log(shark.size);
// // console.log(dog.sound);
// // console.log(cat.color);
// // console.log(shark.soundLoop());

// // ternary ? operator

// // const terTry = 3 < 4 ? "Nope" : "Yes";
// // console.log(terTry);

// // let i = 10;

// // while (i > 0) {
// //   console.log("Nice");
// //   i--;
// // }

// const friendNames = [
//   "Leo",
//   "Micho",
//   "Leonard",
//   "Luca",
//   "Leolo",
//   "Justin",
//   "Lennart",
//   "Laurin",
// ];

// // for (element of friendNames) {
// //   console.log(element);
// // }

// // for (letter of friendNames[2]) {
// //   console.log(letter);
// // }

// // object literal method
// const micho = {
//   age: 20,
//   height: 161,
//   job: "Teacher",
// };

// // constructor
// function People(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// // const paulo = new People("Paulo", 22, "Student");
// // console.log(paulo);

// const leo = new People("Leandro", 18, "Student");

// // accessing values of an Object
// // bracket notation
// console.log(leo["age"]);
// // dot notation
// console.log(leo.age);

// // getting the Object values
// const leoValues = Object.values(leo);

// // getting the Object keys
// const leoKeys = Object.keys(leo);
// // console.log(leoValues, leoKeys);

// // getting the Object entries
// const leoEntries = Object.entries(leo);
// console.log(leoValues, leoKeys, leoEntries);

// // fortsetzen mit merging objects

// // const mama = new People("Anja", 49, "Teacher");

// // const mamaEntries = Object.entries(mama);
// // const mamaKeys = Object.keys(mama);
// // const mamaValues = Object.values(mama);

// // console.log(mamaEntries, mamaKeys, mamaValues);

// const family = ["Anja", "Eddy", "Leandro", "Paulo"];
// const filledArray = [
//   1,
//   2,
//   "Paulo",
//   { name: "Paulo", age: 22 },
//   ["a", "b", "c"],
//   12.5,
// ];

// console.log(family[1]);
// console.log(family[family.length - 1]);
// family.push("Micho");
// // console.log(family);

// // Items hinzufügen zum Ende des Arrays
// // family.push("Marius");

// // Items vorne an das Array hinzufügen
// filledArray.unshift("Leandro");

// // Items an gewünschter Position einfügen
// filledArray.slice(2, 0, "Anja");
// // 1) Index des neuen Items 2) Anzahl Objekte vom Start die gelöscht werden sollen 3) einzufügendes Item

// console.log(filledArray);

// // löscht das letzte ohne spezifisches Argument
// // family.pop();
// // -> kann auch ein Argument übergeben werden
// // family.pop("Hund");

// // erstes Element löschen
// // family.shift();

// // Item an gewünschter Position entfernen
// // family.splice(family.indexOf("Marius"), 1);
// // erstes Argument -> Index des Arrays rausfinden und zweites
// // Argument -> 1 Item in dem Index löschen

// // Items löschen
// // family.pop("Marius");
// console.log(family);

// // Iterating over Arrays

// // for loop
// for (let i = 0; i < family.length; i++) {
//   console.log(`This is my family member called: ${family[i]}`);
// }

// // alternatively using the forEach() method
// family.forEach((member, i) => {
//   console.log(member);
// });

// filledArray.forEach((item, i) => {
//   console.log(item);
// });

// // With forEach(), the return statement returns from the anonymous function. The loop is created by the outer scope, so it continues to call the function anew for the remaining items in the array.
// // -> Returning from the function passed to forEach() won’t cancel the loop

// const numberArr = [1, 3, 2, 34, 45, 234, 98, 90, 87, 45];

// const mappedNumberArr = numberArr.map((v) => v * v);
// // const mappedNumberArr = numberArr.map((v) => v * v);
// // const mappedNumberArr = numberArr.map();

// console.log(mappedNumberArr);

// const filtered = mappedNumberArr.filter((v) => v % 2 === 0);
// const filteredArr = numberArr.filter((v) => (v * v) % 3 === 0);
// console.log(filtered, filteredArr);

// const mapped = numberArr.map(Math.sqrt);
// const maps = numberArr.map(multiplyNums);

// function multiplyNums(nums) {
//   return nums * nums;
// }

// console.log(mapped, maps);

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// const mapss = persons.map(getFullName);

// function getFullName(element) {
//   return [element.firstname, element.lastname].join(" ");
// }

// console.log(mapss);

// const students = [
//   [1, 2, 3, 4, 5],
//   ["Paulo", "Luca", "Justin", "Leo", "Lennart"],
//   ["SE", "SE", "SE", "PM", "SE"],
// ];

// const stumaps = students.map(stuFunc);

// function stuFunc(element) {
//   for (let i = 0; i < students.length; i++) {
//     for (element of students[i]) {
//       for (let j = 0; j < students[0].length; j++) {
//         console.log([students[i][j]].join(" "));
//       }
//     }
//   }
// }

// // arrow functions

// let fruits = (fruit) => "Your favorite fruit is: " + fruit;
// console.log(fruits("Banana"));

// let veggies = (vegOne, vegTwo) => vegOne + vegTwo;
// console.log(veggies("Cucumber", "Tomato"));

// let food = ["Bollo", "Pizza", "Bread", "Tomato Soup"];
// food.sort();
// console.log(food);

// // compare function with array.sort()

// let nums = [3, 24, 23, 245, 56];
// console.log(
//   nums.sort(function (a, b) {
//     return a - b;
//   })
// );

// // recursion

// function countDown(number) {
//   console.log(number);
//   const newNum = number + 1;

//   // base condition
//   if (newNum < 10) {
//     countDown(newNum);
//   }
// }

// // countDown(4);

// // Recap: Objects, Arrays, Recursion, arrow functions

// const consultant = {
//   area: "Business",
//   degree: "Economics",
//   salary: 70000,
// };
// const teacher = {
//   area: "Education",
//   degree: "Teaching",
//   salary: 60000,
// };
// const softwareEngineer = {
//   area: "Software",
//   degree: "Computer Science",
//   salary: 80000,
// };

// const jobs = [consultant, teacher, softwareEngineer];
// // console.log(jobs);

// const dataScientist = {
//   area: "Software",
//   degree: "Computer Science",
//   salary: 65000,
// };

// function Worker(name, area, salary) {
//   this.name = name;
//   this.area = area;
//   this.salary = salary;
// }

// const worker1 = new Worker("Paulo", "Student", [10000, 20000, 30000]);
// console.log(worker1["salary"]);
// // does the same
// // console.log(worker1.salary);

// console.log(Object.keys(worker1));
// console.log(Object.values(worker1));
// console.log(Object.entries(worker1));

// // inheritance
// const worker2 = {
//   ...worker1,
//   area: "Software",
// };

// const worker3 = {
//   ...worker2,
//   partner: "Michelle",
// };

// console.log(worker3);

// // console.log(dataScientist["salary"]);

// const jobSalaries = jobs.map(function (i) {
//   return i.salary;
// });

// console.log(jobSalaries);

// // console.log(jobSalaries);

// // jobs.unshift(dataScientist);
// // console.log(jobs);

// jobs.push(softwareEngineer, dataScientist);

// for (let i = 0; i < jobs.length - 1; i++) {
//   console.log(jobs[i]);
// }

// // jobs.forEach((job, i) => {
// //   console.log(job);
// // });

// // console.log(jobs.map((job) => job.degree + " " + job.area + " " + job.salary));

// // console.log(jobs.filter((jobs) => jobs.salary >= 70000));

// // console.log(jobSalaries.sort((a, b) => a - b));

// // console.log(jobs.slice(1, 2));

// const nos = [3, 5, 7, 9];

// const myFunc = (total, num) => {
//   return total - num;
// };

// console.log(nos.reduce(myFunc));

// // blurring the last 4 characters of a String
// function maskify(cc) {
//   return cc.slice(0, -4) + "####";
// }

// function masked(cc) {
//   for (element of cc.slice(0, -4)) {
//     return "#".repeat(cc);
//   }
// }

// console.log(maskify("Spororoegk"));

// const mapTry = nos.map((i) => i * i * i);
// console.log(mapTry);

// console.log(nos.filter((i) => i % 3 === 0));

// // OOP

// class Student {
//   name;
//   age;
//   profession;

//   constructor(name = "", age = 0, profession = "") {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
//   }

//   nameProfession() {
//     console.log(
//       `Hi, my name is ${this.name}, I'm ${this.age} years old and currently ${this.profession}.`
//     );
//   }
// }

// const mautschi = new Student("Mautschi", 20, "Nursery School Teacher");
// console.log(Object.values(mautschi));
// // console.log(mautschi.age);

// class Shape {
//   firstName;
//   sides;
//   sideLength;

//   constructor(firstName, sides, sideLength) {
//     this.firstName = firstName;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//   calcPerimeter() {
//     console.log(this.sides * this.sideLength);
//   }
// }

// class Square extends Shape {
//   color;
//   constructor(firstName = "square", sides = "4", sideLength, color) {
//     super(firstName, sides, sideLength);
//     this.color = color;
//   }

//   calcArea() {
//     console.log(this.sideLength ** 2);
//   }
// }

// const square = new Shape("square", 4, 5);
// const triangle = new Shape("triangle", 3, 3);
// triangle.calcPerimeter();
// // square.calcPerimeter();

// const squared = new Square(undefined, undefined, 5, "green");
// console.log(squared.firstName);
// squared.calcPerimeter();
// squared.calcArea();

// class Startup {
//   companyName;
//   size;
//   funding;

//   constructor(companyName, size, funding) {
//     this.companyName = companyName;
//     this.size = size;
//     this.funding = funding;
//   }

//   getName() {
//     console.log(this.companyName);
//   }

//   getSize() {
//     console.log(this.size);
//   }

//   getFacts() {
//     console.log(
//       `${this.companyName} is a company of ${this.size} people that received ${this.funding} as funding.`
//     );
//   }
// }

// const enpal = new Startup("Enpal", 3000, 300000000);
// enpal.getFacts();

// class Corporate extends Startup {
//   founders;

//   constructor(companyName, size = "big", funding, founders) {
//     super(companyName, size, funding);
//     this.founders = founders;
//   }

//   getFacts() {
//     console.log(
//       `${this.companyName} is a company of ${this.size} people that received ${this.funding} as funding. The founder's name is ${this.founders}`
//     );
//   }
// }

// const deliveryHero = ("Delivery Hero", "big", 1000000, "Oliver Samwer");
// // deliveryHero.getFacts();

// // Funktion, die alle Werte bis 10 mit der Eingabe multipliziert und alles aufsummiert

// function multiSum(num, ten = 10) {
//   // Eingabe: 5
//   // Output:
//   // 5*1 + 5*2 + 5*3 + ... + 5*10
//   let sum = 0;
//   for (let i = 0; i <= ten; i++) {
//     sum += num * i;
//   }
//   return sum;
// }

// console.log(multiSum(9, 10));
// function countDown(number) {
//   // display the number
//   console.log(number);

//   // decrease the number value
//   const newNumber = number - 1;

//   // base case
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(4);

// callback functions -> Funktionen, welche anderen Funktionen als Parameter übergeben werden
// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// setTimeout(() => {
//   console.log("3");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("1");
//     }, 1000);
//   }, 1000);
// }, 1000);
// // countdown 3...2...1

// // const fetch = require("node-fetch");
// // import * as fs from "fs";
// // const fs = require("fs"); // file system module inside of node

// // fs.readFile("./test.http", { encoding: "utf-8" }, (err, data) => {
// //   console.log(data);
// // });

// // Promises -> gets passed a function that takes
// // two variables (resolve, reject)
// const promise = new Promise((resolve, reject) => {
//   // get a random number between 0 and 2
//   const randNum = Math.floor(Math.random() * 3);
//   if (randNum === 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise
//   .then(() => console.log("Success"))
//   // takes a callback function which logs "Success" -> passing the handler .then() is only
//   // handling the resolve/success case
//   .catch(() => console.error("Something didn't work"));
// takes a callback function which logs "Sth didn't work" -> passing the handler .catch() is only
// handling the reject/error case

// fs readFile with promises instead of callbacks (less code needed) -> using an existing promise
// promises set of functions

// fs.promises
//   .readFile("./test.http", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((err) => console.err());

// fetch with promises -> Fetch API for asynchronous resource requests from a server

// fetch("https://pokeapi.co/api/v2/pokemon/ditto") // calling fetch
//   .then((res) => res.json()) // handling success case, get the raw response and
//   // convert it into json (returns a promise)
//   .then((data) => console.log(data)) //getting the actual data (chaining on another promise)
//   .catch((err) => console.error(err)); // catch the error for failure case

// // fetching with async/await without error handling

// const loadFile = async () => {
//   // calling fs.promises.readFile without promises or callbacks
//   // storing the response directly in a variable (more readable)
//   // try and catch to handle errors
//   try {
//     const data = await fs.promises.readFile("./test.http", {
//       encoding: "utf-8",
//     });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// loadFile();

// const practiceProm = new Promise((resolve, reject) => {
//   const birthYear = 2000;
//   if (birthYear > 1997) {
//     resolve();
//   } else {
//     reject();
//   }
//   // birthYear(55);
// });

// practiceProm
//   .then(() => console.log("SUCCESS"))
//   .catch(() => console.error("ERROR"));

// setTimeout(() => {
//   console.log("du bist doof");
// }, 5000);

// const newProm = new Promise((resolve, reject) => {
//   const num = 19;
//   if (num === 20) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// newProm
//   .then(() => console.log("YES ITS TRUE"))
//   .catch(() => console.error("NOPE not true"));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 3000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// f();

// async function getAlert() {
//   // async -> function always returns a promise
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("DONE"), 2000);
//   });

//   const result = await promise; // wait until promise resolves (2 sec)
//   // await suspends the function execution until the promise settles, then resumes it with its result
//   console.log(result);
// }

// getAlert();

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Response in the making");
//     resolve(`extra info + ${response}`);
//   });
// }
// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Request located to ${location}`);
//     if (location === "Google") {
//       resolve("Google saying hi"); // response
//     } else {
//       reject("Only talking to Google");
//     }
//   });
// }

// makeRequest("Google")
//   .then((response) => {
//     console.log("Request received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => console.error(error));

// async function doWork() {
//   // JS will leave this function, do other work, come back once it is finished and store the result in the response variable
//   try {
//     const response = await makeRequest("F");
//     console.log("Response received");
//     const processedResponse = await processRequest(response);
//     console.log(processedResponse);
//   } catch (err) {
//     console.log(err);
//   }
// }

// doWork();

// async function praiseMessi() {
//   try {
//   } catch {}
// }

// fetch("https://reqres.in/api/users/23", {
//   // HTTP method
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // stringify -> converting the JS object to a JSON String
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR"));

// node Übung

let os = require("os");

let bytes = os.freemem();
let kilo = bytes / 1000;
let mega = kilo / 1000;

console.log(mega);
