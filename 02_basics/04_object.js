// singleton

//const tinderUser = new Object();// singleton object tb bante hai jb constructor ka conpect aata hai 

const tinderUser = {}

tinderUser.id = "123abc" 
tinderUser.name = "virat"
tinderUser.isLonggIn = false

// console.log(tinderUser);

// nested object
const regularUser = {
    email: "Lakshay@gamil.com",
    fullname:{
    userfullname: {
       firstname:"Lakshay",
       lastname: "kumar",
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj4 ={5: "e", 6: "f"}


//const obj3 = {obj1, obj2}
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3);


const obj5 = {...obj1, ...obj2}
//console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



const users = [
    {
        id: 1,
        email: "Lakshay@gmail.com"
    },
    {
        id: 1,
        email: "Chitransh@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
]

//console.log(users[2].email);// accoding to index



const helloUser = {}

helloUser.id = "1818abc" 
helloUser.name = "rohit"
helloUser.isLonggIn = true

// if we wants only key or value

console.log(Object.keys(helloUser));//[ 'id', 'name', 'isLonggIn' ] this is array format
console.log(Object.values(helloUser));//[ '1818abc', 'rohit', true ] this is also array format

// Object.entries make every keys and value pair in array format and store also in a array foprmat
console.log(Object.entries(helloUser));//[ [ 'id', '1818abc' ], [ 'name', 'rohit' ], [ 'isLonggIn', true ] ]


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor,price,coursename}=course //Object Destructuring

console.log(price);


//++++++++++++ json (JavaScript Object Notation)+++++++++++++++++

//Keys double quotes (" ") me honi chahiye.
//JSON is a text/string format, not an object.
//  Convert Object to JSON => JSON.stringify(obj);
//Convert JSON to Object => JSON.parse(jsonString);

//Object  --JSON.stringify()-->  JSON String

//JSON String  --JSON.parse()-->  Object




// {
//     // it is json
// }


//  {// it is also json
//    "coursename": "javascript",
//     "price": "999",
//     "courseInstructor":"hitesh"
// }


// [
//     {},
//     {},
//     {}
// ]
