const arr = ["virat", "rohit", "kl"];
const arr1 = ["iyar", "pant", "gill"];

// arr.push(arr1) //[ 'virat', 'rohit', 'kl', [ 'iyar', 'pant', 'gill' ] ]
// console.log(arr);

// const arr2 =arr.concat(arr1);//[ 'virat', 'rohit', 'kl', 'iyar', 'pant', 'gill' ]
// console.log(arr2);

// const arr3 = [...arr, ...arr1];// similar as concat but it is new style 
// console.log(arr3);

// const arr4 = [1,2,3,4,[5,6],[7,8,[9,10,11]]];
// const arr5 = arr4.flat(Infinity);
// console.log(arr5);

console.log(Array.isArray(arr1));// it tell something is array or 
console.log(Array.from("Lakshay"))// it convert string into array
console.log(Array.from({name: "hitesh"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]

