// object literals 

const obj = Symbol("key1");

const JsUser = {
    name: "Lakshay",
    "full name": "Lakshay kumar",// jb string mai space ho tb string ko " " mai likhte hai 
    [obj]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Lakshayh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[obj])

// JsUser.email = "chitransh@google.com"
// console.log(JsUser.email)
// Object.freeze(JsUser);// ab object mai koi change nhi hoga
// JsUser.email = "rahul@google.com"
// console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


