// for in loop mainly use for object but it also work on the Array, String, 


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {// object are iterable with the help of for in loop
  //console.log(key, '-:', myObject[key]);
}



const coding = ["js", "java", "python", "cpp"]

for (const num in coding) {
   // console.log(num);// ye line only array ki keys dege
   // console.log(num, ':_', coding[num]);// it give key and value both
}


//+++++++++++++++ map is not iterable with the help of forin loop
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
