const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
//         |
//         |   
// {
//   value: 3.141592653589793,  this is hardcode values and not changeable
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
Math.PI=5
console.log(Math.PI);// not change

const code ={
    name: "javscript",
    price: 999,
    
    project: function(){
        console.log("code nhi chla");   
    }
}
//console.log(Object.getOwnPropertyDescriptor(code, "name"));

Object.defineProperty(code, 'name', {
 writable: false,
  enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(code, "name"));
