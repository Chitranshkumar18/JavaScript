const score=101
console.log(score);

 const balance = new Number(100);// output with datatype
 console.log(balance);

console.log(typeof(balance.toString()));// its type string
console.log(typeof balance); // its type object Because new Number(100) creates a Number object, not a primitive number.

console.log(balance.toFixed(3));// it decide how much 0(zero) print after orignal number.  =>.  100.000 


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5));



const hund = 10000000000
console.log(hund.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++++++ maths+++++++++++++++++++++++++//


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));



console.log(Math.random());// randome value lie 0 to 1(0 <= random < 1) 1 kabhi nhi aayege 

//if we wants to print the number in any range use random

console.log(Math.floor(Math.random()*10) + 1);



const min = 10
const max = 20


// important formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
