// forof => Array, String, Map, Set



const arr = [1,2,3,4,5,6,7,8,9]
for (const num of arr) {
    console.log(num);
}


const greeting = "Hello world!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


// ++++++++maps++++++++++//

const map= new Map();  // duplicate key are not allow
map.set(1, "hello")
map.set(2, "hello 2")
map.set(3, "hello 3")
map.set(4, "hello 4")
//console.log(map);//{ 1 => 'hello', 2 => 'hello 2', 3 => 'hello 3', 4 => 'hello 4' }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//++++++++++object or not iterable +++++++++++++//

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);//myObject is not iterable
    
// }
