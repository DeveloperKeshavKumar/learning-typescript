// import {add} from ".";
export const a: number = 1; // => import {a} from index
export function greet(name: string): void {
   console.log("Hello " + name);
}
const filename = "index";
export default filename; // => import filename from index

// mixed imports => import filename, {a} from index