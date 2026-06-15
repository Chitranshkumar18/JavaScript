// Arrays


const myArr = [1,2,3,4,5,6,7,8];
const myHero = ["virat" ,"shaktiman"];

const myArr2 = new Array(1,2,3,4,6);
// console.log(typeof myArr );// object
// console.log(typeof myHero);// object


//console.log(myArr[4]); // accoding to index

// some array operation 

// myArr.push(9);// insert at last
// console.log(myArr);

// myArr.pop();// delete last element
// console.log(myArr);

// myArr.unshift(9);// insert at first it is time taking process 
// console.log(myArr);

// myArr.shift(9);// delete first element
// console.log(myArr);

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(8));

// const newArr = myArr.join() // it convert array into the string
// console.log(myArr);

// console.log( typeof newArr);


// slice, splice

// console.log("A", myArr);


const myn1 = myArr.slice(1,3);// it does not take element of the range
console.log(myn1);


const myn2 = myArr.splice(1,3);// it take all element of the range
console.log(myn2);













