let name = "Lakshay"
let repoCount = 12

console.log(name + repoCount); //it's very old so we are not use 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
const gameName = new String('chitransh-kumar-prajapati')

console.log(gameName[4]);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.indexOf('p'));// indexOf is case sensitive
console.log(gameName.charAt(5));
console.log(gameName.substring(0, 17));

const newString = gameName.slice(-8, 4)
console.log(newString)

const str1 =  "   virat    "
console.log(str1);
console.log(str1.trim());

const url = " https://chitransh.com/hitesh%20kumar";
console.log(url.replace('%20' , '_'));

console.log(url.includes('sundar'))


console.log(gameName.split('-'));




