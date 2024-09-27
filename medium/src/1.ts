// Type Assertion
let myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// or
myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

const x = 3 as number;

// Literal Type

// Works on const variables, coz they have only 1 possible value
const pi = 3.14; // const pi: 3.14
let e = 2.75; // let e: number

// Another example
function printText(s: string, alignment: "left" | "right" | "center") {
   // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// Literal Inference 
declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" as "GET" }; 
// req.method is inferred to be string, not "GET".
handleRequest(req.url, req.method as "GET"); 
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
