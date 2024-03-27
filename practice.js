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
*/

// const markInfo = {
//     weight: 78,
//     height: 1.69
// };

// const johnInfo = {
//     weight: 92,
//     height: 1.76
// };

// function calcBmi(weight, height) {
//     let bmi = Math.round(weight / (height ** 2));
//     return bmi;
// }

// const markBmi = calcBmi(markInfo.weight, markInfo.height);
// const johnBmi = calcBmi(johnInfo.weight, johnInfo.height);

// console.log(markBmi, johnBmi);

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI (${markBmi}) is higher then John's BMI (${johnBmi})!`)
// } else {
//     console.log(`John's BMI (${johnBmi}) is higher then Mark's's BMI (${markBmi})!`)
// }

const dolphins = {
    score1: [96, 108, 89],
    score2: [97, 112, 101],
    score3: [97, 112, 101]
}

const koalas = {
    score1: [88, 91, 110],
    score2: [109, 95, 123],
    score3: [109, 95, 106]
}

function calcAverage(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }
    let avg = Math.round(totalSum / arr.length);
    console.log(avg);
}

// calcAverage(dolphins.score1);

for (const metric in dolphins) {
    const scores = dolphins[metric];
    calcAverage(scores);
  }

  for (const metric in koalas) {
    const scores = koalas[metric];
    calcAverage(scores);
  }