// Enums => enumerations, used to define set of named constants

type KeyInput = "up" | "down" | "left" | "right"; // But all up, down, left, right are constants
function handlePress(key: KeyInput) {
   if (key == "up") {
      // do something...
   }
}

handlePress("down");
// handlePress("random"); // Will give error

/* Handling Above Using Enum */
enum Direction {
   Up = "1", // 0
   Left = "2",  // 1
   Right = "3",  // 2
   Down = "4",  // 3
}

function keyPress(key: Direction) {
   if (key == Direction.Up) {
      console.log(key)
   }
}

keyPress(Direction.Up);

// Generics => used in Array, to store same type of data

type input = number | string;
// input[] => now we can send elements in mixed of numbers and strings
// string[] | number[] => only one kind of two is supported for one time
function getFirstElement(arr: string[] | number[]) { // Instead of input[], we can do (string[] | number[]) will work fine.
   return arr[0];
}
// console.log(getFirstElement(["Keshav", "Kumar"]).toUpperCase()); // Property 'toUpperCase' does not exist on type 'number'.

// Generic solution would be:
function get1stEl<T>(arg: T[]): T {
   return arg[0];
}
console.log(get1stEl(["Keshav","Kumar",3,1,34,])); // TYPE:-(string | number)=> If not specified the type, then it may give error, coz it can take mixed values
console.log(get1stEl<number>([32, 1, 2, 3]));

type NumArr = Array<number>;
type ObjWithArr = Array<{ name: string }>

let arr: NumArr = [1, 2, 3, 4, 5]; // Works fine
// let array:NumArr = [1,2,3,4,"5"] Does not work fine

