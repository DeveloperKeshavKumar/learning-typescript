// Basic type assigning in TS
let x: number = 1;
console.log(x);

// Assigning type to a function args and return type

function helloworld(name: string): void {
   console.log("Hello " + name);
}

helloworld("Munjya");

// Type Inference
function sum(num1: number, num2: number) {
   return num1 + num2;
}

const value = sum(x, 2);
console.log(value);

// Returning boolean value from a function

function isAdult(age: number): boolean {
   if (age < 18) {
      return false;
   }
   return true;
}

let res: boolean = isAdult(20);
console.log(res);

// Passing Function as Argument. METHOD: 1

function runAfter1Second(func: Function): void {
   setTimeout(() => func(), 1000);
}

runAfter1Second(() => helloworld("Keshav"));

// Passing Function as Argument. METHOD: 2

function runAfter1Sec(func: () => void): void {
   setTimeout(() => func(), 1000);
}

runAfter1Sec(function () {
   console.log("Chin Tapap Dum Dum");
});

// interface

interface User {
   name: string,
   email?: string,
   age: number,
   greet(msg: string): void
}

const user: User = {
   name: "Keshav Kumar",
   email: "keshav@gmail.com",
   age: 19,
   greet(msg: string) {
      console.log("Hello" + msg);
   }
}

res = isAdult(user.age);
console.log(res);

// interface in classes

class Employee implements User {
   name: string;
   age: number;

   constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
   }

   greet(msg: string): void {
      console.log("Hello Employee," + msg);
   }

}

const emp = new Employee("Kanika", 28);
emp.greet("emp 1");


//  TYPE in TS, type == interface but let us do something extra
type Person = {
   name: string,
   age: number
}

// Unions : Either this or that
type StrOrNum = (string | number);

function printId(id: StrOrNum): void {
   console.log(id);
}

printId("ID");
printId(1);

// Intersections : Every property of multiple types/interfaces
type CEO = {
   name: string,
   startDate: Date
}

interface Boss {
   name: string,
   department: string,
}

type TeamLead = CEO & Boss
const teamLead: TeamLead = {
   name: "Keshav",
   startDate: new Date(),
   department: "R & D"
}

// What is difference between interface and type ? Always answer when you check out again

// Arrays in TS

type ArrType = number[];
let nums: number[] = [1, 2, 5, 4, 3, 6, 0, 8, 7, 9];
function maxInArr(nums: ArrType): number {
   return Math.max(...nums);
}
console.log(maxInArr(nums));

// Extending an interface
interface Animal {
   name: string,
   color: string,
}

interface Mammals extends Animal {
   legs: number,
   use: TeamLead
}

let human: Mammals = {
   name: "Kritika",
   color: "Wheat Brown",
   legs: 2,
   use: {
      name: "Developer",
      startDate: new Date(),
      department: "Legacy Systems"
   }
}
console.log(human)