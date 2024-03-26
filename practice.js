/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Luke");
console.log(23);

let firstName = "Luke";
console.log(firstName);


let jsIsFun = true;

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 42);
console.log(typeof "hello world");
*/

const testDataOne = [17, 21, 23];
const testDataTwo = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}•C in ${i + 1} days ... `;
    }
    console.log("...", str);
}
  

printForecast(testDataOne);
printForecast(testDataTwo);